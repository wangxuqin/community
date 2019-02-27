import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public titles:any = ["熱點資訊", "系統公告"];
  public index:number = 1;
  public news:any = new Array(10);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  public doTabChange(index)
  {
    this.index = index;
  }

  public doRefresh()
  {
    
  }

  public doInfinite(index)
  {

  }
}
