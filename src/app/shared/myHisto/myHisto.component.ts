import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'shared-my-histo',
  templateUrl:'./myHisto.component.html' ,
  styleUrl: './myHisto.component.css'
})
export class MyHistoComponent {

  @Input()
  public lastCalc:string = '';
  public histoList:string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lastCalc'] && changes['lastCalc'].currentValue) {
      this.histoList.unshift(changes['lastCalc'].currentValue);
    }

    console.log(this.histoList);
  }

  clearHisto(){
    this.histoList = [];
  }
}
