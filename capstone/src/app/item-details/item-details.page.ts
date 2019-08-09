
import { item, ItemcrudService } from './../services/itemcrud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import Speech from 'speak-tts';
import { ThrowStmt } from '@angular/compiler';

import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { fileURLToPath } from 'url';



@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  speech = new Speech();
  voices : any[];
  
  

  createdCode = null;
 
  item: item = {
    name: "",
    type: "",
    stl: "",
    photo: "",
    stldownloadurl:""
    
  
  };
 
  text = null;
  itemId = null;
  
 
  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private nav: NavController,
    private itemService: ItemcrudService,
    private loadingController: LoadingController) { 

      if (this.speech.hasBrowserSupport()) { // returns a boolean
        console.log('speech synthesis supported');
        this.speech.init({
          volume: 1,
             lang: 'en-GB',
             rate: 1,
             pitch: 1,
             splitSentences: true,
             listeners: {
                 onvoiceschanged: (voices: any) => {
                   this.voices = voices;
                     console.log('Event voiceschanged', voices);
                 }
             }
     }).then( () => {
        console.log(this.voices[1].name);
     });
  
    } else {
      console.log('not supported');
    }

    }
 
  ngOnInit() {
    console.log(this.text);
    console.log("Statute");

    this.itemId = this.route.snapshot.params['id'];
    if (this.itemId)  {
      this.loadItem();
      console.log(this.itemId)
      this.createCode() 
      this.item.name;
      console.log(this.text);
    }
  }
 
  async loadItem() {
    const loading = await this.loadingController.create({
      message: 'Loading Item..'
    });
    await loading.present();
 
    this.itemService.getItem(this.itemId).subscribe(res => {
      loading.dismiss();
      this.item = res;
      console.log(this.item.name);
      this.text =  "name, " + "," + this.item.name +"."
                 + "description. " + this.item.stl +"."
                 + "type" + "," + this.item.type ;
                
      console.log(this.text);

    });
  }
 
  async saveItem() {
 
    const loading = await this.loadingController.create({
      message: 'Saving ..'
    });
    await loading.present();
 
    if (this.itemId) {
      this.itemService.updateItem(this.item, this.itemId).then(() => {
        loading.dismiss();
        this.nav.navigateRoot('itemloading');
      });
    } else {
      this.itemService.addItem(this.item).then(() => {
        this.nav.navigateRoot('itemloading');
      });
 
      loading.dismiss();
    }
  }




  async saveItemPhoto() {
 
    const loading = await this.loadingController.create({
      message: 'Saving ..'
    });
    await loading.present();
 
    if (this.itemId) {
      this.itemService.updateItem(this.item, this.itemId).then(() => {
        loading.dismiss();
       
      });
    } else {
      this.itemService.addItem(this.item).then(() => {
    
      });
 
      loading.dismiss();
    }
  }



  createCode() {

    this.createdCode = this.itemId
  }
  speak() {
    console.log(this.text);
    this.speech.speak({
      text: this.text
  }).then(() => {
      console.log('Success !');
  }).catch(e => {
      console.error('An error occurred :', e);
  });
  }

  async selectedPhoto(event){
 
   
    const file: File = event.target.files[0];
    console.log("Selected filename: ", file.name);
    const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref('/itemphotos/'+ this.itemId);
    storageRef.put(file, metaData);
    const downloadURL = await storageRef.getDownloadURL();
    this.item.photo = downloadURL;
  }

  async selectedModel(event){
 
   
    const file: File = event.target.files[0];
    console.log("Selected filename with space: ", file.name);
    // const nospace = file.name.replace(/\s/g, "");
    // console.log(nospace);
    const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref('/3dmodels/'+ this.itemId);
    storageRef.put(file, metaData);
    const downloadURL = await storageRef.getDownloadURL();
    this.item.stl = downloadURL;
    console.log(this.item.stl);
  }

  updateUrl(name){

    this.item.photo = "https://storage.googleapis.com/ethnofind.appspot.com/itemphotos/"+ name;
    console.log(this.item.photo)
   
    this.saveItemPhoto();
    let id = this.itemId;
    console.log(id);
    this.router.navigate(['/refreshmedia', id]);
  
  }
  
 

  
}
