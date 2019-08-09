import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.page.html',
  styleUrls: ['./accountsettings.page.scss'],
})
export class AccountsettingsPage implements OnInit {

  constructor(
    public nav: NavController) {
    
   }

  ngOnInit() {
  }
  gotoItems() {
    this.nav.navigateRoot(['/items']);
  }
}
