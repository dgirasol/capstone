import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { ItemcrudService, item } from '../services/itemcrud.service';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataResolveService implements Resolve<any> {
  item = null;

  constructor(
 
    private  itemService: ItemcrudService,
    public loading: LoadingController
    ) { }

  async resolve(route: ActivatedRouteSnapshot){
    this.loadItems()
    
    const loading = await this.loading.create({
      message: 'loading... please wait'
    });
    await loading.present();

    let items = this.item
    this.loading.dismiss();
    console.log(items)
    return items;
    
    
  }

 async  loadItems(){
  this.itemService.getItems().subscribe(res => {
      this.item = res;

     
    });
 }
}
