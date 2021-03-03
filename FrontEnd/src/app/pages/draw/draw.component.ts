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
import { Color } from 'fabric/fabric-impl';
import { bufferToggle } from 'rxjs/operators';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
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
  normal: any;
  rect: any;
  currentMode: any;
  color: any;
  json;
  triangle: any;
  url: any;
  shapeColor: any;
  shapeChosen: any;
  constructor(
    public dialog: MatDialog,
    public socket: ConnectService,
    public auth: AuthService
  ) {}
  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }
  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      width: 1500,
      height: 800,
    });
    // let a=JSON.stringify(this.socket.canvas);
    // this.canvas.clear();
    // console.log(a);
    // this.canvas.loadFromJSON(a,()=>{
    //   this.canvas.renderAll();
    // })
    this.socket.setupSocketConnection();
    console.log(this.socket.socket.emit('a', 'hello a'));
    this.json = this.socket.updateCanvas();
    this.json.subscribe((data) => {
      console.log(data);
      this.canvas.loadFromJSON(this.socket.canvas);
      this.canvas.renderAll();
    });

    // this.keyboardEvents();

    //xac dinh vi tri con chuot trong canvas
    // this.canvas.on('mouse:move', function (event) {
    //   console.log(event.e.clientX, event.e.clientY);
    // });
    // this.canvas.on('mouse:move', function (e) {
    //   switch (e.keyCode) {
    //     case 46:
    //       alert('deleted');
    //   }
    // });
  }
  ngOnDestroy(): void {
    this.socket.canvas = this.canvas.toJSON().objects;
  }

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Delete') {
      this.deleteShape();
    }
  }

  //default
  public pointer() {
    this.canvas.isDrawingMode = false;
    this.socket.canvas = this.canvas.toJSON().objects;
    console.log(this.socket.canvas);
  }
  public chooseColor() {
    this.color = document.getElementById('color');
    this.canvas.freeDrawingBrush.color = this.color.value;
  }
  
  public startDrawing() {
    this.canvas.isDrawingMode = true;
    // this.canvas.freeDrawingBrush.color = this.chooseColor();
    this.canvas.freeDrawingBrush.width = 14;
    fabric.Path.prototype.selectable = false;
    this.canvas.defaultCursor = 'create';
    this.socket.sendCanvas(this.canvas.toJSON().objects);
  }

  public eraser() {
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.color = 'white';
    this.canvas.freeDrawingBrush.width = 14;
    fabric.Path.prototype.selectable = false;
    console.log(this.json);
    this.socket.sendCanvas(this.canvas.toJSON().objects);
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
    console.log(this.json);
  }
  public drawCircle() {
    this.canvas.isDrawingMode = false;
    this.circle = new fabric.Circle({
      radius: 20,
      fill: 'blue',
    });
    this.canvas.add(this.circle);
    this.socket.sendCanvas(this.canvas.toJSON().objects);

    // this.canvas.renderAll();
    // this.json = this.socket.canvas;
  }
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
  public chooseShape() {
    // this.shapeChosen=document.getElementById('')
    switch (this.shapeChosen) {
      case 'Circle':
        this.drawCircle();
      case 'Rectangle':
        this.drawRectangle();
      case 'Triangle':
        this.drawTriangle();
    }
  }

  //ShapeOption
  public shapeOption() {
    this.shapeColor = document.getElementById('shapecolor');
    return this.canvas.getActiveObject().set('fill', this.shapeColor.value);
    //     this.canvas.on('selected',function(){
    //   this.canvas.fill(this.shapeColor.value);
    // })
  }
}
