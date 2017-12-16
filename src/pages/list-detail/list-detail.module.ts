import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDetailPage } from './list-detail';

@NgModule({
  declarations: [
    ListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDetailPage),
  ],
  exports: [
    ListDetailPage
  ]
})
export class ListDetailPageModule {}
