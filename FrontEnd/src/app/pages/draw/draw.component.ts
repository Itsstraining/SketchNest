import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fabric } from 'fabric';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';
import { ConnectService } from 'src/app/services/connect.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss'],

})
export class DrawComponent implements OnInit, OnDestroy {
  brush: any;
  canvas;

  circle: any;
  image: any;
  color: any;
  normal: any;
  rect: any;
  currentMode: any;
  json;
  triangle: any;
  url: any;
  mode: any;
  shapeColor: any;
  shapeChosen: any;
  download = document.getElementById('download');
  link = document.createElement('a');
  isRedoing: Boolean;
  stack: Array<[]>;
  activeObject: any;
  memorizeObject: fabric.Object;


  private keyCodes = {
    'C': 67,
    'S': 83, //New key code
    'V': 86,
    'X': 88,
    'Y': 89,
    'Z': 90
  }
  constructor(public dialog: MatDialog, public socket: ConnectService, public auth: AuthService,) { }
  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      width: 1300,
      height: 700,
    });

    console.log(this.socket.socket.emit('a', 'hello a'));
    this.json = this.socket.updateCanvas();
    this.json.subscribe((data) => {
      console.log(data);
      console.log(this.json);
      this.canvas.loadFromJSON(this.socket.canvas);
      this.canvas.renderAll();
    });
  }
  ngAfterViewInit(): void {
    this.socket.setupSocketConnection();
    this.socket.socket.emit('update-canvas', this.json)
    console.log('cai ham nay chua dc chay');
    this.socket.updateCanvas().subscribe(data => {
      ;
      console.log("ham nay duoc chay roi")
      // this.json=this.canvas.loadFromJSON(data,this.canvas.renderAll.bind(data))
    })
    // this.json.subscribe((data) => {
    //   console.log(data)
    //   console.log("hello ban");
    //  this.canvas.loadFromJSON(JSON.stringify(this.json),this.canvas.renderAll.bind(this.json));


    // });

    this.canvas.on('object:created', function () {
      if (!this.isRedoing) {
        this.stack = [];
      }
      this.isRedoing = false;
    });
  }
  ngOnDestroy() {
    this.socket.socket.emit('getJSON', this.json = JSON.stringify(this.canvas.toJSON()));
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Delete') {
      this.deleteShape();
    }
    if (event.ctrlKey) {
      switch (event.keyCode) {
        case this.keyCodes['Z']:
          this.undo();
          console.log("done undo");
          break;
        case this.keyCodes['Y']:
          this.redo();
          console.log("done redo");
          break;

      }

    }
  }

  //default
  clearCanvas() {
    this.canvas.clear();
  }

  pointer() {
    this.canvas.isDrawingMode = false;
    this.socket.canvas = this.canvas.toJSON().objects;
    console.log(this.socket.canvas);

  }
  public chooseColor() {
    this.color = document.getElementById('color');
    this.canvas.freeDrawingBrush.color = this.color.value;
  }
  convertImg() {
    this.link.download = 'download.png';
    this.link.href = this.canvas.toDataURL();
    this.link.click();
  }

  startDrawing() {
    this.canvas.isDrawingMode = true;
    // this.canvas.freeDrawingBrush.color = this.chooseColor();
    this.canvas.freeDrawingBrush.width = 14;
    this.canvas.freeDrawingBrush.color = 'black';
    fabric.Path.prototype.selectable = false;
    this.canvas.defaultCursor = 'create';
    this.socket.sendCanvas(this.canvas.toJSON().objects);
  }
  //bug
  highlightPen() {
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.color = 'red'
    this.canvas.freeDrawingBrush.width = 14;
    this.canvas.on('path:created', function (opt) {
      opt.path.globalCompositeOperation = 'source-over';
      opt.path.stroke = 'red';
      opt.path.animate('opacity', '0', {
        duration: 3000,
      })
    })
  }


  public eraser() {
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.color = 'white';
    this.canvas.freeDrawingBrush.width = 14;
    fabric.Path.prototype.selectable = false;
  }

  public picture(event) {
    this.canvas.isDrawingMode = false;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file data url
      reader.onload = (event) => {
        // called when readAsDataURL is completed
        this.url = event.target.result;
        // console.log(this.url)
        fabric.Image.fromURL(this.url, (test) => {
          this.canvas.add(test);
          this.canvas.renderAll();
          this.socket.sendCanvas(this.canvas.toJSON().objects);
        });
      };
    }
  }
  public textField() {
    this.canvas.add(
      new fabric.IText('lorem ipsum', {
        fontFamily: 'arial black',
        left: 100,
        top: 100,
      })
    );
  }
  ///Keyboard events

  // /Shape
  public deleteShape() {
    this.canvas.isDrawingMode = false;
    // console.log(this.canvas.getActiveObject().objects)
    console.log(this.canvas.getActiveObject());

    this.canvas.remove(this.canvas.getActiveObject());
    this.socket.sendCanvas(this.canvas.toJSON().objects);
  }
  public drawCircle() {
    let X, Y;
    this.canvas.isDrawingMode = false;
    this.canvas.on("mouse:down", function (e) {
      X = parseInt(e.e.clientX);
      Y = parseInt(e.e.clientY);
      this.canvas.on("mouse:up", function () {
        this.circle = new fabric.Circle({
          left: X,
          top: Y,
          fill: 'red',
          radius: 20,
          stroke: 'red',
        })
        this.canvas.add(this.circle);
        this.canvas.renderAll();
      })
    })
  }
  // this.socket.sendCanvas(this.canvas.toJSON().objects);
  // this.canvas.renderAll();
  // this.json = this.socket.canvas;
  public drawRectangle() {
    this.canvas.isDrawingMode = false;
    this.rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'blue',
    });
    this.canvas.add(this.rect);
    this.canvas.renderAll();

    this.socket.sendCanvas(this.canvas.toJSON().objects);
  }
  public drawTriangle() {
    this.canvas.isDrawingMode = false;
    this.triangle = new fabric.Triangle({
      width: 100,
      height: 100,
      fill: 'blue',
      top: 10,
      left: 10,
    });
    this.canvas.add(this.triangle);
    this.canvas.renderAll();
    this.socket.sendCanvas(this.canvas.toJSON().objects);
  }
  //ShapeOption
  public shapeOption() {
    this.shapeColor = document.getElementById('shapecolor');
    return this.canvas.getActiveObject().set('fill', this.shapeColor.value);
    //     this.canvas.on('selected',function(){
    //   this.canvas.fill(this.shapeColor.value);
    // })
  }
  downloadCanvas() {
    this.canvas.toDataUrl();
    console.log(this.canvas.toDataUrl());
  }
  undo() {
    if (this.canvas._objects.length > 0) {
      console.log(this.canvas._objects.pop())
      this.stack.push(this.canvas._objects.pop());
      this.canvas.renderAll();
    }
    return this.stack;
  }

  redo() {
    console.log(this.stack);
    if (this.stack.length > 0) {

      this.isRedoing = true;
      this.canvas.add(this.stack.pop());
      this.canvas.renderAll();
    }
  }
}
