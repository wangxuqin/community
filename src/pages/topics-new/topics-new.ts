import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';

/**
 * Generated class for the TopicsNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topics-new',
  templateUrl: 'topics-new.html',
})
export class TopicsNewPage extends BaseUI{

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {
      super(toastCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicsNewPage');
  }

  public cancel()
  {
    this.showToast("取消");
  }

  public publish()
  {
    this.showToast("發佈");
  }

}
