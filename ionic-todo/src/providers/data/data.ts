import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient, public storage : Storage) {
    console.log('Hello DataProvider Provider');
  }

  getData() {
    return this.storage.get('taskApp');
  }

  saveData(data) {
    return this.storage.set('taskApp', data);
  }

}
