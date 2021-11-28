import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import { User } from "../interfaces/user.model";
import {user} from "@angular/fire/auth";
import {AuthService} from "./auth.firebase.service";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  uid = "";

  constructor(private fireStorage: AngularFireStorage, private authService: AuthService) {
    authService.user$.subscribe(user => {
      this.uid = user.uid;
    })
  }

  uploadImage(file: File) {
    this.fireStorage.upload('/images/' + this.uid, file);
  }
}
