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
  public index:number = 0;
  public news:any = new Array(10);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  public doTabChange(index)
  {
    this.index = index;
  }

  //下拉刷型界面
  doRefresh(refresher){
    setTimeout(()=>{
      refresher.complete();
    }, 2000);
  }

  public doInfinite(infiniteScroll){

    setTimeout(() => {
      infiniteScroll.complete();
    },2000);

    // //toast提示
    // this.showInfo("加载成功");
    // //增加index
    // this.cnt ++;
    // var data1 = {name:'yellowcong'+this.cnt,age:'1994', gender:'1', description:'三炮',img:"http://www.runoob.com/try/demo_source/venkman.jpg"};
    // this.users.push(data1);


    // if(this.cnt >=10){
    //     //如果都加载完成的情况，就直接 disable ，移除下拉加载
    //     infiniteScroll.enable(false);
    //     //toast提示
    //     this.showInfo("已加载所有");
    // }
  }
}
