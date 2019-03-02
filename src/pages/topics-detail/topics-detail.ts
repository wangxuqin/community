import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Navbar } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';

/**
 * Generated class for the TopicsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topics-detail',
  templateUrl: 'topics-detail.html',
})
export class TopicsDetailPage extends BaseUI
{
  @ViewChild(Navbar) navBar: Navbar;
  public discusses:any = new Array(5);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {
      super(toastCtrl);
  }

  ionViewDidLoad(){
  }

  toSend()
  {
    this.showToast("發送");
  }
}
