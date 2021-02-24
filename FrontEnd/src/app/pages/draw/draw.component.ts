import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fabric } from 'fabric'
import { Canvas, Circle } from 'fabric/fabric-impl';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  canvas;
  normal: any;
  circle: any;
  rect: any;
  currentMode: any;
  modes = {
    draw: 'draw',
  };
  constructor(public dialog:MatDialog) { }
openDialog(){
  this.dialog.open(DialogExampleComponent);
}
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
    this.canvas.clear();
  }
  ///Shape
  drawCircle() {
    this.circle = new fabric.Circle({
      radius: 50,
      fill: 'blue'

    })
    this.canvas.add(this.circle);
    this.canvas.renderAll();

  }
  drawRectangle() {
    this.rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'blue'

    })
    this.canvas.add(this.rect);
    this.canvas.renderAll();
  }
 
}
