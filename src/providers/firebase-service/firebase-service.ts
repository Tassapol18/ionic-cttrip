import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public http: Http, public angularfiredb: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getContactsList() {
    return this.angularfiredb.list('/contactsList/');
  }

  addContact(name) {
    this.angularfiredb.list('/contactsList').push(name);
  }

  deleteContact(id) {
    this.angularfiredb.list('/contactsList').remove(id);
  }
}