import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
export class TopicsPage {
  public titles:any = ["話題討論", "與我相關"];
  public index:number = 1;
  public topics:any = new Array(10);
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    alert("返回頂部");
  }

  public toNewTopic()
  {
    alert("新增話題");
  }
}
