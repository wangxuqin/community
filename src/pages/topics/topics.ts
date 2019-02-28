import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Content } from 'ionic-angular';
import { TopicsNewPage } from '../topics-new/topics-new';
import { BaseUI } from '../../common/baseui';
import { TopicsDetailPage } from '../topics-detail/topics-detail';

/**
 * Generated class for the TopicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
})
export class TopicsPage extends BaseUI{
  @ViewChild("scroller") scroller:Content;
  
  public titles:any = ["話題討論", "與我相關"];
  public index:number = 0;
  public topics:any = new Array(10);
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {
      super(toastCtrl);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicsPage');
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

  public toTop()
  {
    this.scroller.scrollToTop();
  }

  public toShowNewTopic()
  {
    this.navCtrl.push(TopicsNewPage);
  }

  public toShowDetailTopic(){
    this.navCtrl.push(TopicsDetailPage);
  }
}
