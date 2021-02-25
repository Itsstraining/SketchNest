import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { Canvas, Circle } from 'fabric/fabric-impl';
import { io } from 'socket.io-client';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss'],
})
export class DrawComponent implements OnInit {
  canvas: any;
  circle: any;
  rect: any;
  currentMode: any;
  modes = {
    draw: 'draw',
  };
  constructor(public auth: AuthService) {}

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
  pointer(canvas) {
    canvas.isDrawingMode = false;
  }
  startDrawing(canvas) {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.color = 'black';
    canvas.freeDrawingBrush.width = 14;
    canvas.renderAll();
  }
  eraser(canvas) {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.color = 'white';
    canvas.freeDrawingBrush.width = 100;
    canvas.renderAll();
  }
  ///Shape
  drawCircle(canvas) {
    this.circle = new fabric.Circle({
      radius: 50,
      fill: 'blue',
    });
    canvas.add(this.circle);
    canvas.renderAll();
  }
  drawRectangle(canvas) {
    this.rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'blue',
    });
    canvas.add(this.rect);
    canvas.renderAll();
  }
}
