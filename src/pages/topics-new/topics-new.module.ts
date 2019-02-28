import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicsNewPage } from './topics-new';

@NgModule({
  declarations: [
    TopicsNewPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicsNewPage),
  ],
})
export class TopicsNewPageModule {}
