import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { BasePage } from '../../common/basepage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage{
  public banners:any = new Array(4);
  public news:any = new Array(4);
  public topics:any = new Array(4);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {
      super(navCtrl, navParams, toastCtrl);
  }
}
