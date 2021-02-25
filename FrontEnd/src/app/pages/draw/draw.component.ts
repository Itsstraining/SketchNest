import { Component, OnInit, ViewChild } from '@angular/core';
import { fabric } from 'fabric'
import { Canvas, Circle, StaticCanvas } from 'fabric/fabric-impl';
@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  
  img: any;
  canvas;
  normal: any;
  circle: any;
  rect: any;
  currentMode: any;
  modes = {
    draw: 'draw',
  };
  preview: any;
  constructor() { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      width: 1500,
      height: 800,
    });
    //xac dinh vi tri con chuot trong canvas
    this.canvas.on('mouse:move', function (event) {
      console.log(event.e.clientX, event.e.clientY);
    })

  }
  //default
  pointer() {
    this.canvas.isDrawingMode = false;
  }
  startDrawing() {
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.color = 'black';
    this.canvas.freeDrawingBrush.width = 14;
    this.canvas.renderAll();
  }
  eraser() {
    this.canvas.isDrawingMode =false;
    this.canvas.remove(this.canvas.getActiveObject());


  }
  ///Shape
  drawCircle() {
    this.canvas.isDrawingMode =false;
    this.circle = new fabric.Circle({
      radius: 50,
      fill: 'blue'

    })
    this.canvas.add(this.circle);
    this.canvas.renderAll();

  }
  drawRectangle() {
    this.canvas.isDrawingMode =false;
    this.rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'blue'

    })
    this.canvas.add(this.rect);
    this.canvas.renderAll();
  }
@ViewChild("canvas") mycanvas;

// previewFile() {
//   let preview = document.querySelector('img');
//   const newLocal = document.querySelector('input[type=file]').files[0];
//   const file = newLocal;
//   const reader = new FileReader();

//   reader.addEventListener("load", () => {
//      this.preview.src = reader.result;

//     }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }

}
