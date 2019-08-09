import { Component, OnInit } from '@angular/core';

import { NavController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(
    public nav: NavController
  ) { }

  ngOnInit() {
 
  }

}
