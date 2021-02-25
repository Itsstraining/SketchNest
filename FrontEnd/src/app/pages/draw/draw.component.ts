import { BLACK_ON_WHITE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fabric } from 'fabric';
import { Canvas, Circle } from 'fabric/fabric-impl';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';

import { Color } from 'fabric/fabric-impl';
@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss'],
})
export class DrawComponent implements OnInit {
  brush: any;
  canvas: any;
  
  something: any;
  normal: any;
  circle: any;
  rect: any;
  currentMode: any;
  modes = {
    draw: 'draw',
  };
  constructor(public dialog: MatDialog) {}
  openDialog() {
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
    });
  }
  //default
  pointer() {
    this.canvas.isDrawingMode = false;
  }
  startDrawing() {
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.color = 'black';
    this.canvas.freeDrawingBrush.width = 14;
    fabric.Path.prototype.selectable = false;
    fabric.Path.prototype;
  }
  eraser() {
    this.canvas.isDrawingMode = false;
    this.canvas.remove(this.canvas.getActiveObject());


  }
  ///Shape
  drawCircle() {
    this.canvas.isDrawingMode = false;
    this.circle = new fabric.Circle({
      radius: 50,
      fill: 'blue',
    });
    this.canvas.add(this.circle);
    this.canvas.renderAll();
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
  //Choose color
}
