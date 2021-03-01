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
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss'],
})
export class DrawComponent implements OnInit, OnDestroy {
  // @HostListener('keypress', ['$event.target'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   console.log(event);
  //   let x = event.keyCode;
  //   if (x === 27) {
  //       console.log('Escape!');
  //   }
  // }
 
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
  constructor(public dialog: MatDialog,public auth: AuthService) { }
  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }
  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      width: 1500,
      height: 800,
    });
    // this.keyboardEvents();
    //load canvas:
    this.canvas.clear();
    this.json = {
      version: '4.3.1',
      objects: [
        {
          type: 'circle',
          version: '4.3.1',
          originX: 'left',
          originY: 'top',
          left: 90,
          top: 180,
          width: 40,
          height: 40,
          fill: 'blue',
          stroke: null,
          strokeWidth: 1,
          strokeDashArray: null,
          strokeLineCap: 'butt',
          strokeDashOffset: 0,
          strokeLineJoin: 'miter',
          strokeUniform: false,
          strokeMiterLimit: 4,
          scaleX: 1,
          scaleY: 1,
          angle: 0,
          flipX: false,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: '',
          fillRule: 'nonzero',
          paintFirst: 'fill',
          globalCompositeOperation: 'source-over',
          skewX: 0,
          skewY: 0,
          radius: 20,
          startAngle: 0,
          endAngle: 6.283185307179586,
        },
        {
          type: 'circle',
          version: '4.3.1',
          originX: 'left',
          originY: 'top',
          left: 392,
          top: 145,
          width: 40,
          height: 40,
          fill: 'blue',
          stroke: null,
          strokeWidth: 1,
          strokeDashArray: null,
          strokeLineCap: 'butt',
          strokeDashOffset: 0,
          strokeLineJoin: 'miter',
          strokeUniform: false,
          strokeMiterLimit: 4,
          scaleX: 1,
          scaleY: 1,
          angle: 0,
          flipX: false,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: '',
          fillRule: 'nonzero',
          paintFirst: 'fill',
          globalCompositeOperation: 'source-over',
          skewX: 0,
          skewY: 0,
          radius: 20,
          startAngle: 0,
          endAngle: 6.283185307179586,
        },
        {
          type: 'circle',
          version: '4.3.1',
          originX: 'left',
          originY: 'top',
          left: 414,
          top: 326,
          width: 40,
          height: 40,
          fill: 'blue',
          stroke: null,
          strokeWidth: 1,
          strokeDashArray: null,
          strokeLineCap: 'butt',
          strokeDashOffset: 0,
          strokeLineJoin: 'miter',
          strokeUniform: false,
          strokeMiterLimit: 4,
          scaleX: 1,
          scaleY: 1,
          angle: 0,
          flipX: false,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: '',
          fillRule: 'nonzero',
          paintFirst: 'fill',
          globalCompositeOperation: 'source-over',
          skewX: 0,
          skewY: 0,
          radius: 20,
          startAngle: 0,
          endAngle: 6.283185307179586,
        },
        {
          type: 'circle',
          version: '4.3.1',
          originX: 'left',
          originY: 'top',
          left: 249,
          top: 355,
          width: 40,
          height: 40,
          fill: 'blue',
          stroke: null,
          strokeWidth: 1,
          strokeDashArray: null,
          strokeLineCap: 'butt',
          strokeDashOffset: 0,
          strokeLineJoin: 'miter',
          strokeUniform: false,
          strokeMiterLimit: 4,
          scaleX: 1,
          scaleY: 1,
          angle: 0,
          flipX: false,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: '',
          fillRule: 'nonzero',
          paintFirst: 'fill',
          globalCompositeOperation: 'source-over',
          skewX: 0,
          skewY: 0,
          radius: 20,
          startAngle: 0,
          endAngle: 6.283185307179586,
        },
        {
          type: 'circle',
          version: '4.3.1',
          originX: 'left',
          originY: 'top',
          left: 631,
          top: 151,
          width: 40,
          height: 40,
          fill: 'blue',
          stroke: null,
          strokeWidth: 1,
          strokeDashArray: null,
          strokeLineCap: 'butt',
          strokeDashOffset: 0,
          strokeLineJoin: 'miter',
          strokeUniform: false,
          strokeMiterLimit: 4,
          scaleX: 1,
          scaleY: 1,
          angle: 0,
          flipX: false,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: '',
          fillRule: 'nonzero',
          paintFirst: 'fill',
          globalCompositeOperation: 'source-over',
          skewX: 0,
          skewY: 0,
          radius: 20,
          startAngle: 0,
          endAngle: 6.283185307179586,
        },
      ],
    };
    this.canvas.loadFromJSON(this.json, function () {
      this.canvas.renderAll();
      // });
      //xac dinh vi tri con chuot trong canvas
      // this.canvas.on('mouse:move', function (event) {
      //   console.log(event.e.clientX, event.e.clientY);
    });
    this.canvas.on('mouse:move', function (e) {
      switch (e.keyCode) {
        case 46:
          alert('deleted');
      }
    });
  }
  ngOnDestroy() {
    //xuat canva thanh JSON
    this.json = JSON.stringify(this.canvas.toJSON());
  }
  // this.canvas.on('keydown') = function(e) {
  //   if (46 === e.keyCode) {
  //   // 46 is Delete key
  //   // do stuff to delete selected elem ents
  // }
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

  startDrawing() {
    this.canvas.isDrawingMode = true;
    // this.canvas.freeDrawingBrush.color = this.chooseColor();
    this.canvas.freeDrawingBrush.width = 14;
    fabric.Path.prototype.selectable = false;
    this.canvas.defaultCursor = 'create';
  }
  // highlightPen() {
  //   this.canvas.isDrawingMode = true;
  //   this.canvas.setActiveObject(fabric.Path);
  //   var activeObj = this.canvas.getActiveObject();
  //   activeObj.setOpacity(1);
  //   activeObj.animate('opacity', '0', {
  //     duration: 1000,
  //     onChange: this.canvas.renderAll.bind(this.canvas),
  //     onComplete: function () {
  //       this.canvas.remove(activeObj);
  //     }
  //   });
  // }
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
          this.canvas.renderAll();
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
    ///////////////////
    // let x,y;
    // this.canvas.isDrawingMode = false;

    // await this.canvas.on('mouse:down', function (event) {

    // x=event.e.clientX
    // y=event.e.clientY
    // this.circle = new fabric.Circle({
    //   radius: 50,
    //   fill: '',
    //   stroke: 'red',
    //   strokeWidth: 3,
    //   left: x,
    //   top: y,
    // });
    // this.canvas.add(this.circle);

    // this.canvas.renderAll();

    //   })
    // };

    ///////////////////////
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
