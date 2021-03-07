import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fabric } from 'fabric';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';
import { ConnectService } from 'src/app/services/connect.service';
import { AuthService } from 'src/app/services/auth.service';
import {
  FabricComponent,
  FabricDirective,
  FabricConfigInterface,
} from 'ngx-fabric-wrapper';
@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss'],
})
export class DrawComponent implements OnInit, OnDestroy {
  public colorchoose;
  public toogle = true;
  public tool = 'Rectangle';
  public action = 'none';
  public color= 'black';
  public x0;
  public x2;
  public y2;
  public y0;
  public rectangle;
  public circle;
  public line;
  public square;
  public ellipse;
  public selected = null;
  public mode = 'add';
  public copiedObject;
  public copiedObjects = new Array();
  public cutted = false;
  public group;
  public state = [];
  public mods = 0;
  public savedCanvas;
  public show: boolean = true;
  public myjson;
  public data: any = {
    objects: [
      {
        type: 'group',
        top: 22,
        left: 72,
        width: 200,
        height: 60,
        objects: [
          {
            type: 'rect',
            top: -30,
            left: -100,
            width: 200,
            height: 60,
            fill: '#cfcfcf',
          },
          {
            type: 'text',
            width: 200,
            height: 60,
            fontSize: 24,
            text: 'Example object',
            originX: 'center',
            originY: 'center',
          },
        ],
      },
    ],
  };

  public type: string = 'component';
  public drawMode = false;
  public disabled: boolean = false;
  // ngOnInit() {
  //   if (this.disabled == false) this.disabled = true;
  // }
  public config: FabricConfigInterface = {
    isDrawingMode: this.drawMode,
    renderOnAddRemove: true,
  };

  @ViewChild(FabricComponent, { static: false }) componentRef?: FabricComponent;
  @ViewChild(FabricDirective, { static: false }) directiveRef?: FabricDirective;
  ////////////////////////
  brush: any;
  canvas;
  image: any;
  normal: any;
  rect: any;
  currentMode: any;
  json;
  triangle: any;
  url: any;
  download = document.getElementById('download');
  link = document.createElement('a');
  isRedoing: Boolean;
  stack: Array<[]>;
  activeObject: any;
  memorizeObject: fabric.Object;

  private keyCodes = {
    C: 67,
    S: 83, //New key code
    V: 86,
    X: 88,
    Y: 89,
    Z: 90,
  };
  constructor(
    public dialog: MatDialog,
    public socket: ConnectService,
    public auth: AuthService
  ) {}
  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }
  public freeLine() {
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.color=this.color;
    this.tool = 'Freeline';
  }

  ngOnInit(): void {
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
    this.canvas = this.componentRef.directiveRef.fabric();
    console.log(this.canvas.toDataURL('png'));
  }
  ngOnDestroy() {
    this.socket.socket.emit(
      'getJSON',
      (this.json = JSON.stringify(this.canvas.toJSON()))
    );
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Delete') {
      this.deleteShape();
      this.canvas.renderAll();
    }
    if (event.ctrlKey) {
      switch (event.keyCode) {
        case this.keyCodes['Z']:
          this.undo();

          break;
        case this.keyCodes['Y']:
          this.redo();
          this.canvas.renderAll();
          break;
      }
    }
  }

  //default
  clearCanvas() {
    this.canvas.clear();
  }

  convertImg() {
    this.link.download = 'download.png';
    this.link.href = this.canvas.toDataURL();
    this.link.click();
  }

  startDrawing() {
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.width = 14;
    if (!this.color) {
      this.color = 'black';
    }
    this.canvas.freeDrawingBrush.color = this.color;
    fabric.Path.prototype.selectable = false;
    this.canvas.defaultCursor = 'create';
    this.socket.sendCanvas(this.canvas.toJSON().objects);
  }
  //bug
  // highlightPen() {
  //   let a = [];
  //   this.canvas.isDrawingMode = true;
  //   this.canvas.freeDrawingBrush.color = 'red';
  //   this.canvas.freeDrawingBrush.width = 14;
  //   this.canvas.on('path:created', function (opt) {
  //     opt.path.globalCompositeOperation = 'source-over';
  //     opt.path.stroke = 'red';
  //     // opt.path.animate('opacity', '0', {
  //     //   duration: 3000,

  //     // })
  //     setTimeout(this.canvas.remove(opt.path));
  //   });
  // }


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
    console.log(this.canvas.getActiveObject());

    this.canvas.remove(this.canvas.getActiveObject());
    this.socket.sendCanvas(this.canvas.toJSON().objects);
  }

  //ShapeOption

  downloadCanvas() {
    this.canvas.toDataUrl();
    console.log(this.canvas.toDataUrl());
  }
  undo() {
    if (this.canvas._objects.length > 0) {
      console.log(this.canvas._objects.pop());
      this.stack.push(this.canvas._objects.pop());
      this.canvas.renderAll();
    }
    this.canvas.renderAll();
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

  //////////////////////////
  public mouseDown(mouseEvent) {

    this.x0 = mouseEvent.pointer.x;
    this.y0 = mouseEvent.pointer.y;
    switch (this.tool) {
      case 'Freeline': {
        break;
      }
      case 'Straightline': {
        this.canvas.isDrawingMode = false;
        var coordinates = [this.x0, this.y0, this.x0, this.y0];
        this.line = new fabric.Line(coordinates, {
          strokeWidth: 3,
          stroke: this.color,
        });
        this.canvas.add(this.line);
        this.updateModifications(true);
        this.selected = this.line;
        break;
      }
      case 'Rectangle': {
        this.canvas.isDrawingMode = false;
        if (this.toogle) {
          this.rectangle = new fabric.Rect({
            top: this.y0,
            left: this.x0,
            fill: this.color,
          });
          this.canvas.add(this.rectangle);
          this.updateModifications(true);
          this.selected = this.rectangle;
          break;
        } else {
          this.rectangle = new fabric.Rect({
            top: this.y0,
            left: this.x0,
            stroke: this.color,
            fill: null,
          });
          this.canvas.add(this.rectangle);
          this.updateModifications(true);
          this.selected = this.rectangle;
          break;
        }
      }
      case 'Square': {
        this.canvas.isDrawingMode = false;
        if (this.toogle) {
          this.square = new fabric.Rect({
            top: this.y0,
            left: this.x0,
            fill: this.color,
          });
        } else {
          this.square = new fabric.Rect({
            top: this.y0,
            left: this.x0,
            fill: null,
            stroke: this.color,
          });
        }
        this.canvas.add(this.square);
        this.updateModifications(true);
        this.selected = this.square;
        break;
      }
      case 'Ellipse': {
        this.canvas.isDrawingMode = false;
        if (this.toogle) {
          this.ellipse = new fabric.Ellipse({
            originX: 'center',
            originY: 'center',
            top: this.y0,
            left: this.x0,
            fill: this.color,
            rx: 0,
            ry: 0,
          });
        } else {
          this.ellipse = new fabric.Ellipse({
            originX: 'center',
            originY: 'center',
            top: this.y0,
            left: this.x0,
            fill: null,
            stroke: this.color,
            rx: 0,
            ry: 0,
          });
        }

        this.canvas.add(this.ellipse);
        this.updateModifications(true);
        this.selected = this.ellipse;
        break;
      }
      case 'Circle': {
        this.canvas.isDrawingMode = false;
        if (this.toogle) {
          this.circle = new fabric.Circle({
            originX: 'center',
            originY: 'center',
            top: this.y0,
            left: this.x0,
            fill: this.color,
            radius: 0,
          });
        } else {
          this.circle = new fabric.Circle({
            originX: 'center',
            originY: 'center',
            top: this.y0,
            left: this.x0,
            fill: null,
            stroke: this.color,
            radius: 0,
          });
        }
        this.canvas.add(this.circle);
        this.updateModifications(true);
        this.selected = this.circle;
        break;
      }
      case 'Pointer':{
        this.canvas.isDrawingMode=false;
        break;
      }
    }
    // console.log(mouseEvent);
  }
  public mouseMove(mouseEvent) {
 
    this.x2 = mouseEvent.pointer.x;
    this.y2 = mouseEvent.pointer.y;
    let changeInX = this.x2 - this.x0;
    let changeInY = this.y2 - this.y0;
    switch (this.tool) {
      case 'Straightline': {
        if (this.selected !== null) {
          this.selected.set({
            x2: this.x2,
            y2: this.y2,
          });
        }
        this.canvas.renderAll();
        break;
      }
      case 'Rectangle': {
        if (this.selected !== null) {
          this.selected.set({
            width: changeInX,
            height: changeInY,
          });
        }
        this.canvas.renderAll();
        break;
      }
      case 'Square': {
        if (Math.abs(changeInX) >= Math.abs(changeInY)) {
          if (changeInX > 0) {
            if (changeInY < 0) changeInY = -changeInX;
            //TOP RIGHT: Y gets value of -X
            else changeInY = changeInX; //BOTTOM RIGHT: Y gets value of X
          } else if (changeInX < 0) {
            if (changeInY < 0) changeInY = changeInX;
            //TOP LEFT: Y gets value of X
            else changeInY = -changeInX; //BOTTOM LEFT: Y gets value of -X
          }
        } else if (Math.abs(changeInX) < Math.abs(changeInY)) {
          if (changeInY > 0) {
            if (changeInX < 0) changeInX = -changeInY;
            //BOTTOM LEFT: X gets value of -Y
            else changeInX = changeInY; //BOTTOM RIGHT: X gets value of Y
          } else if (changeInY < 0) {
            if (changeInX < 0) changeInX = changeInY;
            //TOP LEFT: X gets value of Y
            else changeInX = -changeInY; //TOP RIGHT: X gets value of -Y
          }
        }

        if (this.selected !== null) {
          this.selected.set({
            width: changeInX,
            height: changeInY,
          });
        }
        this.canvas.renderAll();
        break;
      }
      case 'Ellipse': {
        if (this.selected !== null) {
          this.selected.set({
            rx: Math.abs(changeInX),
            ry: Math.abs(changeInY),
          });
        }
        this.canvas.renderAll();
        break;
      }
      case 'Circle': {
        if (Math.abs(changeInX) >= Math.abs(changeInY)) changeInY = changeInX;
        else if (Math.abs(changeInX) < Math.abs(changeInY))
          changeInX = changeInY;

        if (this.selected !== null) {
          this.selected.set({
            radius: Math.abs(changeInX),
          });
        }
        this.canvas.renderAll();
        break;
      }
    }
  }
  public updateModifications(saveModification) {
    if (saveModification === true) {
      this.myjson = JSON.stringify(this.canvas);
      this.state.push(this.myjson);
    }
  }
  public mouseUp(mouseEvent) {
    if (this.mode == 'add') {
      this.selected = null;
      this.tool='Pointer'
    }
    this.x0 = 0;
    this.y0 = 0;
  }
  public deleteObjects() {
    this.canvas.isDrawingMode = false;
    console.log(this.canvas.isDrawingMode);
    var activeObject = this.componentRef.directiveRef
        .fabric()
        .getActiveObject(),
      activeGroup = this.canvas.getActiveGroup();
    if (activeObject) {
      this.canvas.remove(activeObject);
    } else if (activeGroup) {
      var objectsInGroup = activeGroup.getObjects();
      this.canvas.discardActiveGroup();
      objectsInGroup.forEach(function (object) {
        this.componentRef.directiveRef.remove(object);
      });
    }
  }
}
