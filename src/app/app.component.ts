import { Component } from '@angular/core';

import { Platform,  MenuController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import { UserService } from './services/user.service';
import { TranslateConfigService } from './services/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'DRINKS',
      url: '/drinks',
      icon: 'beer'
    },
		{
			title: "EVENTS",
			url: "/events",
			icon: "calendar"
		},
		{
			title: "LOGIN",
			url: "/login",
			icon: "contact"
		},
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
		private menu: MenuController,
		private translateConfigService: TranslateConfigService
  ) {
    this.initializeApp();
  }

	initializeApp() {
		firebase.initializeApp({
			apiKey: "AIzaSyAWv7wd-GkRuj7lsnniYyLSVkkczKU8m5k",
	    authDomain: "barapp-5a66d.firebaseapp.com",
	    databaseURL: "https://barapp-5a66d.firebaseio.com",
	    projectId: "barapp-5a66d",
	    storageBucket: "barapp-5a66d.appspot.com",
	    messagingSenderId: "245183107029",
	    appId: "1:245183107029:web:95b9f06b3b697ac0aab75c",
	    measurementId: "G-JB0MJ3Z6CH"
    });
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

	logout() {
		console.log("Loggin out...");
		firebase.auth().signOut();
		this.menu.close();
		console.log("Logged out");
	}
}
