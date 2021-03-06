import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawRoutingModule } from './draw-routing.module';
import { DrawComponent } from './draw.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FabricModule } from 'ngx-fabric-wrapper';
import { FABRIC_CONFIG } from 'ngx-fabric-wrapper';
import { FabricConfigInterface } from 'ngx-fabric-wrapper';
const DEFAULT_FABRIC_CONFIG: FabricConfigInterface = {};

@NgModule({
  declarations: [DrawComponent],
  imports: [
    CommonModule,
    DrawRoutingModule,
    MatMenuModule,
    MatIconModule,
    FabricModule,
  ],
  providers: [
    {
      provide: FABRIC_CONFIG,
      useValue: DEFAULT_FABRIC_CONFIG,
    },
  ],
})
export class DrawModule {}
