import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawRoutingModule } from './draw-routing.module';
import { DrawComponent } from './draw.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DrawComponent],
  imports: [
    CommonModule,
    DrawRoutingModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class DrawModule { }
