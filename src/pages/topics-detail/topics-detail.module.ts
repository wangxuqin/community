import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicsDetailPage } from './topics-detail';

@NgModule({
  declarations: [
    TopicsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicsDetailPage),
  ],
})
export class TopicsDetailPageModule {}
