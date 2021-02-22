import { Component, OnInit } from '@angular/core';
import {fabric} from 'fabric'

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  canvas:any;
  constructor() { }

  ngOnInit(): void {
    this.canvas=new fabric.Canvas('canvas',{
      width:1000,
      height:500,
      backgroundColor: 'red'
    });
    //xac dinh vi tri con chuot trong canvas
    this.canvas.on('mouse:move',function(event){

      console.log(event.e.clientX, event.e.clientY);
    })
  }

}
