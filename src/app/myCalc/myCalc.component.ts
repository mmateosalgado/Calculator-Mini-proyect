import { Component, OnInit } from '@angular/core';
import { Operations } from '../interfaces/operations.interface';

@Component({
  selector: 'app-my-calc',
  templateUrl:'./myCalc.component.html',
  styleUrl: './myCalc.component.css',
})
export class MyCalcComponent{
  public firstNumber: number = 0;
  public secondNumber: number = 0;
  public resultText: string = ''; //generar que sea 1 + 2 =  RESULT
  public result: number = 0;
  public inputRow: number = 0;
  public selectedOperation: Operations | string = '';
  public operations: Operations[] = [
    { type: '+' },
    { type: '-' },
    { type: 'x' },
    { type: '/' },
  ];

  setOperation(input:Operations){
    if(!input && this.firstNumber) return;

    this.selectedOperation = input.type;
    this.inputRow = 0;
    this.secondNumber = this.firstNumber;
  }

  //reactive forrms?
  clearAll(){
    this.selectedOperation = '';
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.inputRow = 0;
    this.result = 0;
    this.resultText = '';
  }

  setNumber(input:number){
    const inputNumber:string = input.toString();

    if(this.inputRow === 0){
      this.inputRow = Number(inputNumber);
    }
    else{
      this.inputRow = Number(this.inputRow + inputNumber);
    }

    this.firstNumber = Number(this.inputRow);
  }

  //TODO: Operations with negative numbers doesnt work
  doOperation(){
    if(!this.firstNumber && !this.secondNumber && !this.selectedOperation) return;
    switch(this.selectedOperation){
      case "+":
        this.result = this.secondNumber + this.firstNumber;
        break;
      case "-":
        this.result = this.secondNumber - this.firstNumber;
        break;
      case "x":
        this.result = this.secondNumber * this.firstNumber;
        break;
      case "/":
        this.result = this.secondNumber / this.firstNumber;
        break;
    }
    //set result string for history
    this.resultText = this.firstNumber.toString() + this.selectedOperation + this.secondNumber.toString() + '=' + this.result.toString(); 

    this.firstNumber = this.result;
    this.inputRow = 0;
  }
}
