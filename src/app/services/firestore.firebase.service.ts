import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore,
  ) {}

  getFeeds() {
    return this.firestore.collection('feeds').snapshotChanges();
  }

  addFeed(document: any) {
    return this.firestore.collection('feeds').add(document);
  }

  getDataFromDocs(docs: DocumentChangeAction<unknown>[]): any[] {
    let data: any[] = [];
      docs.forEach(doc => {
        data.push(doc.payload.doc.data());
      });
    return data;
  }
}
