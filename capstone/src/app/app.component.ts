import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
   usertype = "q";

  public appPages = [
    {
      title: 'Catalog',
      url: '/home',
      outlet: 'home',
      icon: 'book'
    },
    {
      title: 'Librarian Accounts',
      url: '/list',
      outlet: 'home',
      icon: 'people'
    },
    
    {
      title: 'myAccount',
      url: '/list',
      icon: 'person'
    }
  ];

  public myaccountPages = [
    {
      title: 'reset password',
      url: '',
      icon: 'reset'
    },
    {
      title: 'Logout',
      url: '',
      icon: 'power'
    }
    
  ];

 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav: NavController,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    });
  }
  
  


}
