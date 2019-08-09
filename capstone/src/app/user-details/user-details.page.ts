
import { user, UsercrudService } from './../services/usercrud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
 
  user: user = {
    email: "",
    fname: "",
    lastname: "",
    type: ""
  };
 
  userId = null;
 
  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private userService: UsercrudService,
    private loadingController: LoadingController) { }
 
  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId)  {
      this.loadUser();
    }
  }
 
  async loadUser() {
    const loading = await this.loadingController.create({
      message: 'Loading Item..'
    });
    await loading.present();
 
    this.userService.getUser(this.userId).subscribe(res => {
      loading.dismiss();
      this.user = res;
    });
  }
 
  async saveUser() {
 
    const loading = await this.loadingController.create({
      message: 'Saving ..'
    });
    await loading.present();
 
    if (this.userId) {
      this.userService.updateUser(this.user, this.userId).then(() => {
        loading.dismiss();
        this.nav.navigateRoot('accounts');
      });
    } else {
      this.userService.addUser(this.user).then(() => {
        loading.dismiss();
        this.nav.navigateRoot('accounts');
      });
    }
  }

 
}

