import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BroadcastDetailPage } from './broadcast-detail';

@NgModule({
  declarations: [
    BroadcastDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BroadcastDetailPage),
  ],
})
export class BroadcastDetailPageModule {}
