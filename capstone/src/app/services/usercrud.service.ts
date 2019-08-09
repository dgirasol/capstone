import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface user {
  email: string;
  fname: string;
  lastname: string;
  type: string;
}


@Injectable({
  providedIn: 'root'
})
export class UsercrudService {
  
  private usersCollection: AngularFirestoreCollection<user>;

  private users: Observable<user[]>;

  constructor(db: AngularFirestore) { 
    this.usersCollection = db.collection<user>('users');

    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsers() {
    return this.users;
  }
  
  getUser(id) {
    return this.usersCollection.doc<user>(id).valueChanges();
  }

  updateUser(user: user, id: string) {
    return this.usersCollection.doc(id).update(user);
  }

  addUser(user: user) {
    return this.usersCollection.add(user);
  }

  removeUser(id) {
    return this.usersCollection.doc(id).delete();
  }
}
