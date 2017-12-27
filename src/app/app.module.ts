import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

const firebase = {
  apiKey: "AIzaSyD-6a8U6dQ2zwOaRNIw-rEjWPSiBTcFgcc",
  authDomain: "countrytrip-31ea9.firebaseapp.com",
  databaseURL: "https://countrytrip-31ea9.firebaseio.com",
  projectId: "countrytrip-31ea9",
  storageBucket: "countrytrip-31ea9.appspot.com",
  messagingSenderId: "499658526274"
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
