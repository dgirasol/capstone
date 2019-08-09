
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';


export interface item {
  name: string;
  type: string;
  stl: string;
  photo: any;
  stldownloadurl: any;



}

@Injectable({
  providedIn: 'root'
})
export class ItemcrudService {
  
  private itemsCollection: AngularFirestoreCollection<item>;

  public items: Observable<item[]>;

  public nav: NavController

  constructor(db: AngularFirestore) { 
    this.itemsCollection = db.collection<item>('items');

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getItems() {
    return this.items;
  }
 
  getItem(id) {
    return this.itemsCollection.doc<item>(id).valueChanges();
  }
 
  updateItem(item: item, id: string) {
    return this.itemsCollection.doc(id).update(item);
  }
 
  addItem(item: item) {
    return this.itemsCollection.add(item);
  }
 
  removeItem(id) {
    this.itemsCollection.doc(id).delete();
  }
}

