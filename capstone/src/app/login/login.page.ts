import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string =""
  password: string =""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public user: UserService,
    public nav: NavController) { }

  ngOnInit() {
  }


  async login(){
    const{ email, password } = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      console.log(res)
      if(res.user) {
        this.user.setUser({
          email,
          uid: res.user.uid
        })
        this.showAlert("Welcome", email)
        this.nav.navigateRoot("home")
      }
   

    } catch(err) {
        console.dir(err)
        this.showAlert("error", err.message)
        }
    }
    async showAlert(header: string, message: string){
      const alert = await this.alert.create({
        header,
        message,
        buttons: ["Ok"]
      })
    
      await alert.present()
  }

    toregister(){
      this.router.navigate(['/register'])
    }

  
  





}