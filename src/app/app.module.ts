import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';
import { MyApp } from './app.component';

import { CounterInputComponent } from '../components/counter-input/counter-input';
import { LabelTabsComponent } from '../components/label-tabs/label-tabs';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { TopicsPage } from '../pages/topics/topics';
import { TopicsNewPage } from '../pages/topics-new/topics-new';
import { TopicsDetailPage } from '../pages/topics-detail/topics-detail';
import { MyPage } from '../pages/my/my';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CounterInputComponent,
    LabelTabsComponent,
    
    HomePage,
    NewsPage,
    NewsDetailPage,
    TopicsPage,
    TopicsNewPage,
    TopicsDetailPage,
    MyPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    PipesModule,
    IonicModule.forRoot(MyApp, {
      iconMode:'ios',//  在整个应用程序中为所有图标使用的模式。可用选项："ios"，"md"
      mode:'ios'//在整个应用程序中使用的模式
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    NewsDetailPage,
    TopicsPage,
    TopicsNewPage,
    TopicsDetailPage,
    MyPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
