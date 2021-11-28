import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../interfaces/user.model";

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private router: Router
  ) {
      this.user$ = this.fireAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            console.log('[logged in user]' + [user])
            return this.fireStore.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      );
  }

  async signInGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.fireAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.fireStore.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data, { merge: true })
  }

  async signOut() {
    await this.fireAuth.signOut();
    this.router.navigate(['/']);
  }

  async sendVerifyEmail() {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification()
      .then();
  }
}
