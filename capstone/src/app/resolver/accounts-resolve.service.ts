import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { UsercrudService, user } from '../services/usercrud.service';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AccountsResolveService implements Resolve<any> {
  user = null;

  constructor(
 
    private  userService: UsercrudService,
    public loading: LoadingController
    ) { }

  async resolve(route: ActivatedRouteSnapshot){
    this.loadUsers()
    
    const loading = await this.loading.create({
      message: 'loading... please wait'
    });
    await loading.present();

    let users = this.user
    this.loading.dismiss();
    console.log(users)
    return users;
    
    
  }

 async  loadUsers(){
    this.userService.getUsers().subscribe(res => {
      this.user = res;

     
    });
 }
}

