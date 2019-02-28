import { Component } from '@angular/core';
import { NavController, ToastController, Tabs } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { TabsPage } from '../tabs/tabs';
import { TopicsDetailPage } from '../topics-detail/topics-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseUI{
  public banners:any = new Array(4);
  public news:any = new Array(4);
  public topics:any = new Array(4);

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController) {
      super(toastCtrl);

      // [[TEST]]
      setTimeout( () => {
        this.navCtrl.push(TopicsDetailPage);
      }, 500);
  }

    /**
   * 选定指定的 tab
   * 
   * @param {number} index 
   * @memberof HomePage
   */
  selectTab(index: number) {
    var t: Tabs = this.navCtrl.parent;
    t.select(index);
  }

  public toNewsTab()
  {
    this.selectTab(TabsPage.Tabs.News);
  }

  public toTopicsTab()
  {
    this.selectTab(TabsPage.Tabs.Topics);
  }

}
