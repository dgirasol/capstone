import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  firstname: string =""
  lastname: string =""
  email: string =""
  password: string =""
  cpassword: string =""
  type: string ="librarian"

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService
    ) { }

  ngOnInit() {
  }
 
  async register(){
    const {firstname, lastname, email, password, cpassword, type} = this 
    if(password !==cpassword) {
      this.showAlert("Error","Passwords do not match")
      return console.error("Passwords do not match")
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      console.log(res)

      this.afstore.doc(`users/${res.user.uid}`).set({
        firstname,
        lastname,
        email,
        type
  
      })

      this.user.setUser({
        email,
        uid: res.user.uid
      })
      this.showAlert("Success", "Account created")
      this.router.navigate(['/home'])
    } catch(error) {
        console.dir(error)
        this.showAlert("Error", error.message)
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


}
