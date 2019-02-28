import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';
import { TopicsPage } from '../topics/topics';
import { MyPage } from '../my/my';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewsPage;
  tab3Root = TopicsPage;
  tab4Root = MyPage;

  static Tabs = {
    Home:0,
    News:1,
    Topics:2,
    My:3
  }

  constructor() {

  }
}
