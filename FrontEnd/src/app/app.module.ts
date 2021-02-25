import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConnectService } from './services/connect.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, DialogExampleComponent],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [ConnectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
