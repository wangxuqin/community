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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initTab();
  }

  initTab(){
    var tabs = document.getElementsByClassName('Tab');
    Array.prototype.forEach.call(tabs, function(tab) {
      tab.addEventListener('click', setActiveClass);
    });

    function setActiveClass(evt) {
      Array.prototype.forEach.call(tabs, function(tab) {
        tab.classList.remove('active');
      });
      evt.currentTarget.classList.add('active');
    }
  }
}
