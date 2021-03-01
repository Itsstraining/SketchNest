import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConnectService } from './services/connect.service';

import { FormsModule } from '@angular/forms';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DialogCreateRoomComponent } from './dialog-create-room/dialog-create-room.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, DialogExampleComponent, DialogCreateRoomComponent],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ConnectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
