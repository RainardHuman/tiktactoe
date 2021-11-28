import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { FormsModule } from "@angular/forms";

import { AuthService } from "./service/auth.firebase.service";
import { FirestoreService } from "./service/firestore.firebase.service";
import { StorageService } from "./service/storage.firebase.service";

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [AuthService, FirestoreService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
