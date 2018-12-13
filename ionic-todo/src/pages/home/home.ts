import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailsPage } from '../item-details/item-details';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public tasks = [];
  constructor( public service : DataProvider, public navCtrl: NavController, public modalCtrl : ModalController) {
    this.service.getData().then((items) => {
      if(items) {
        this.tasks = items;
      }
    });
  }

  ionViewDidLoad() {
    // this.tasks = [
    //   {'title':'Task_1', 'description':'Bike Service'},
    //   {'title':'Task_2', 'description':'Complete Homework'},
    //   {'title':'Task_3', 'description':'Party on 25-dec'}
    // ]
  }

  addTask() {
    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      if(item) {
        this.saveItem(item);
      }
    });

    addModal.present();

    // this.navCtrl.push(AddItemPage);
  }

  saveItem(item) {
    this.tasks.push(item);
    this.service.saveData(this.tasks);
  }

  viewTask(item) {
    this.navCtrl.push(ItemDetailsPage, {item : item});
  }

}
