import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AngularFireModule } from '@angular/fire';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
})
export class RegisterModule {}
