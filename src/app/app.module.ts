import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { FormsModule } from "@angular/forms";

import { AuthService } from "./services/auth.firebase.service";
import { FirestoreService } from "./services/firestore.firebase.service";
import { StorageService } from "./services/storage.firebase.service";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [AuthService, FirestoreService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
