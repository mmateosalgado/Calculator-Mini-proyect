import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHistoComponent } from './myHisto/myHisto.component';



@NgModule({
  declarations: [
    MyHistoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyHistoComponent
  ]
})
export class SharedModule { }
