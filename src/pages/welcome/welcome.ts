import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  facebook = {
    loggedIn: false,
    name: '',
    email: '',
    profilePicture: ''
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afauth: AngularFireAuth) {
  }


  loginwithfb() {
    this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        this.facebook.loggedIn = true;
        this.facebook.email = res.user.email;
        this.facebook.name = res.user.displayName,
          this.facebook.profilePicture = res.user.photoURL
      })
  }

  logoutwithfb() {
    this.facebook.loggedIn = false;
    this.afauth.auth.signOut();
  }

}
