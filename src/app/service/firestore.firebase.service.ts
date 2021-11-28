import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/firestore";
import { Feed } from "../interfaces/cards.model";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  feeds: Feed[] = []
  constructor(
    private firestore: AngularFirestore,
  ) {}

  getFeeds() {
    return this.firestore.collection('feeds').snapshotChanges();
  }

  addFeed(feed: Feed) {
    return this.firestore.collection('feeds').add(feed);
  }

  getDataFromDocs(docs: DocumentChangeAction<unknown>[]): any[] {
    let data = [];
      docs.forEach(doc => {
        data.push(doc.payload.doc.data());
      });
    return data;
  }
}
