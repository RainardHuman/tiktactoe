import { Injectable } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private fireStorage: AngularFireStorage) {}

  uploadImage(file: File) {
    this.fireStorage.upload('/images', file);
  }
}
