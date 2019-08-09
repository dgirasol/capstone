import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-itemloading',
  templateUrl: './itemloading.page.html',
  styleUrls: ['./itemloading.page.scss'],
})
export class ItemloadingPage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
    
    this.nav.navigateRoot('home');
  }

}
