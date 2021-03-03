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
import { Canvas, Color, Image, Path } from 'fabric/fabric-impl';
import { bufferToggle } from 'rxjs/operators';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { ConnectService } from 'src/app/services/connect.service';
import { AuthService } from 'src/app/services/auth.service';
import 'fabric-history';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss'],
})
export class DrawComponent implements OnInit, OnDestroy, AfterViewInit {
  e: Event;
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
  shapeColor: any;
  shapeChosen: any;
  download = document.getElementById('download');
  link = document.createElement('a');

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


  }

  ngOnDestroy() {

    this.json = JSON.stringify(this.canvas.toJSON());
  }

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Delete') {
      this.deleteShape();
    }
  }


  //default
  pointer() {
    this.canvas.isDrawingMode = false;
    // console.log(this.json = JSON.stringify(this.canvas.toJSON()));
  }
  chooseColor() {
    this.color = document.getElementById('color');
    this.canvas.freeDrawingBrush.color = this.color.value;
  }
  convertImg(){
 this.link.download = 'download.png';
 this.link.href = this.canvas.toDataURL()
 this.link.click();
  }

  startDrawing() {
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.width = 14;
    fabric.Path.prototype.selectable = false;
    this.canvas.defaultCursor = 'create';
  }
//bug
  highlightPen() {

    this.canvas.isDrawingMode=true;
    this.canvas.on('path:created',function(){
    })

    fabric.Path.prototype.animate('opacity','0', {
      duration: 4000,
      onChange: this.canvas.renderAll.bind(this.canvas),
      // onComplete:a.remove()
    })
   
    
    


  }
  // this.canvas.freeDrawingBrush.color = this.chooseColor();


  eraser() {

    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.color = 'white';
    this.canvas.freeDrawingBrush.width = 14;
    fabric.Path.prototype.selectable = false;
    console.log(this.json);
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
  chooseShape() {
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
  shapeOption() {
    this.shapeColor = document.getElementById('shapecolor');
    return this.canvas.getActiveObject().set('fill', this.shapeColor.value);
    //     this.canvas.on('selected',function(){
    //   this.canvas.fill(this.shapeColor.value);
    // })
  }
}
