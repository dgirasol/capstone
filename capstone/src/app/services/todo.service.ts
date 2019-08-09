import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface items {
  name: string;
  type: string;
  stl: string;
  photo: string;


}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private itemsCollection: AngularFirestoreCollection<items>;

  private items: Observable<items[]>; 

  constructor(db: AngularFirestore) { 
    this.itemsCollection = db.collection<items>('items');
  }
}
