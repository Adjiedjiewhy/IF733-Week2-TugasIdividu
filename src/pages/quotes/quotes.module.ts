import { NgModule, OnInit } from '@angular/core';
import { IonicPageModule, NavParams } from 'ionic-angular';
import { QuotesPage } from './quotes';

@NgModule({
  declarations: [
    QuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotesPage),
  ],
})
export class QuotesPageModule{

}
