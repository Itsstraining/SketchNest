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
export class DrawComponent implements OnInit, OnDestroy, AfterViewInit {

  brush: any;
  canvas: any;
  circle: any;
  image: any;
  normal: any;
  rect: any;
  currentMode: any;
  color: any;
  json: any;
  triangle: any;
  url: any;
  mode: any;
  shapeColor: any;
  shapeChosen: any;
  isRedoing: Boolean;
  stack: [];
  constructor(public dialog: MatDialog, public socket: ConnectService, public auth: AuthService) { }
  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }
  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      width: 1500,
      height: 800,
    });

    this.socket.setupSocketConnection();

    // this.keyboardEvents();
    //load canvas:
    this.canvas.clear();

    this.canvas.loadFromJSON(this.json, function () {
      this.canvas.renderAll();
      // });
      //xac dinh vi tri con chuot trong canvas
      // this.canvas.on('mouse:move', function (event) {
      //   console.log(event.e.clientX, event.e.clientY);
    });
  }
  ngAfterViewInit(): void {
    this.canvas.isDrawingMode = true;
    this.canvas.on('object:added', function () {
      if (!this.isRedoing) {
        this.stack = [];
      }
      this.isRedoing = false;
    });
  }
  ngOnDestroy() {
    this.json = JSON.stringify(this.canvas.toJSON());
  }

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Delete') {
      this.deleteShape();
    }
    if (event.ctrlKey && event.key == '90') {
      console.log("redo đc bấm")
      this.redo();
    }
  }

  //default
  clearCanvas() {
    this.canvas.clear();
  }
  pointer() {
    this.canvas.isDrawingMode = false;
    // console.log(this.json = JSON.stringify(this.canvas.toJSON()));
  }
  chooseColor() {
    this.color = document.getElementById('color');
    this.canvas.freeDrawingBrush.color = this.color.value;
  }

  startDrawing() {
    this.mode = "drawing";
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.width = 14;
    fabric.Path.prototype.selectable = false;
    this.canvas.defaultCursor = 'create';
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
        // onComplete: this.canvas.remove(temp[i])
      })
    })
  }
  

  eraser() {
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.color = 'black';
    this.canvas.freeDrawingBrush.width = 14;
    this.canvas.on("path:created", function (opt) {
      opt.path.stroke='white';

    })

    fabric.Path.prototype.selectable = false;
  }

  picture(event) {
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

        });
      };
    }
  }
  textField() {
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
  deleteShape() {
    this.canvas.isDrawingMode = false;
    // console.log(this.canvas.getActiveObject().objects)
    console.log(this.canvas.getActiveObject());

    this.canvas.remove(this.canvas.getActiveObject());

    console.log(this.json);
  }
  drawCircle() {
    this.canvas.isDrawingMode = false;
    this.circle = new fabric.Circle({
      radius: 20,
      fill: 'blue',
    });
    this.canvas.add(this.circle);
    this.canvas.renderAll();
    this.socket.socket.emit("a", this.auth.user.displayName);


  }
  drawRectangle() {
    this.canvas.isDrawingMode = false;
    this.rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'blue',
    });
    this.canvas.add(this.rect);
    this.canvas.renderAll();
  }
  drawTriangle() {
    this.canvas.isDrawingMode = false;
    this.triangle = new fabric.Triangle({
      width: 100,
      height: 100,
      fill: 'blue',
      top: 10,
      left: 10,
    });
    this.canvas.add(this.triangle);
  }
  //ShapeOption
  shapeOption() {
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
  // undo(){
  //   if(this.canvas._objects.length>0){
  //     this.stack.push(this.canvas._objects.pop());
  //     this.canvas.renderAll();
  //    }
  // }
  redo() {
    if (this.stack.length > 0) {
      this.isRedoing = true;
      this.canvas.add(this.stack.pop());
    }
  }



}
