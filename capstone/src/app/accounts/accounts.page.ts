import { Component, OnInit } from '@angular/core';
import { UsercrudService } from '../services/usercrud.service';
import { AlertController } from '@ionic/angular';
import { ActionSheetController,LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
 
@Component({
  selector: 'app-accounts',
  templateUrl: 'accounts.page.html',
  styleUrls: ['accounts.page.scss'],
})
export class AccountsPage implements OnInit {

   user = null;

  constructor(
    private userService: UsercrudService,
    public alert: AlertController,
    public action: ActionSheetController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public nav: NavController
    ) { 
      // this.userService.getUsers().subscribe(res => {
      //   this.user = res;
      //   console.log("1");
      //  });
    }
 
  ngOnInit() { 
    
    this.user = this.route.snapshot.data['users']
   

    if (this.user == null){
      this.loadAccounts()
      console.log(this.user,"if");
       }

    else{
    console.log(this.user);
    }

  
   

    
  }
  
  
async loadAccounts(){
        // const loading = await this.loading.create({
        //   message: 'loading... please wait'
        // });
        // await loading.present();
        this.userService.getUsers().subscribe(res => {
          this.user = res;
      
          // loading.dismiss();
          // return this.user;
        });
      }

remove(user) {
    this.showAlert("Confirmation","Delete this record?", user)
  }

  async showAlert(header: string, message: string, user){
    const alert = await this.alert.create({
      header,
      message,
      buttons: [{
                    text: 'Delete',
                    role: 'delete',
                    handler: () => { this.userService.removeUser(user.id); }
               },
               {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => { alert.dismiss(); }
                }]//end alert buttons             
    }); // end alert creation
  
    await alert.present()
  } //end show alert

  
}


