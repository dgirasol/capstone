import { Component, OnInit } from '@angular/core';
import { item, ItemcrudService } from '../services/itemcrud.service';
import { AlertController} from '@ionic/angular';
import { ActionSheetController} from '@ionic/angular';
import { NavController, LoadingController} from '@ionic/angular';
import { ActivatedRoute } from '../../../node_modules/@angular/router';


  
  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage implements OnInit {
    item = null;
  

  constructor(
    private itemService: ItemcrudService,
    public alert: AlertController,
    public action: ActionSheetController,
    public nav: NavController,
    private loading: LoadingController,
    private route: ActivatedRoute
    ) { 

     
    }
 
  ngOnInit() { 
    
    this.item = this.route.snapshot.data['items']
   

    if (this.item == null){
      this.loadItems()
      console.log(this.item,"if");
       }

    else{
    console.log(this.item);
    }

  
   

    
  }

  async loadItems(){
    // const loading = await this.loading.create({
    //   message: 'loading... please wait'
    // });
    // await loading.present();
    console.log("1111");
    this.itemService.getItems().subscribe(res => {
      this.item = res;
     console.log(this.item);
      // this.loading.dismiss();
    });

    

   
 }

  
  // ionViewWillEnter() {
  //   this.itemService.getItems().subscribe(res => {
  //     this.item = res;
  //     console.log("ion view will enter");
    
  //   });
  // }

   
  
 
  remove(item) {
    this.showAlert("Confirmation","Delete this record?", item)
  }

  async showAlert(header: string, message: string, item){
    const alert = await this.alert.create({
      header,
      message,
      buttons: [{
                    text: 'Delete',
                    role: 'delete',
                    handler: () => { this.deleteRecord(item.id); }
               },
               {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => { alert.dismiss(); }
                }]//end alert buttons             
    }); // end alert creation
  
    await alert.present()
  } //end show alert

 

// ionViewWillLeave(){
//   this.item = null;
//   console.log("items leave");
// }

deleteRecord(item){
 

console.log("deleting item id ",item);
this.itemService.removeItem(item);
this.nav.navigateRoot("itemloading");




}

  
}


