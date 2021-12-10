import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
  // Name of user
  name:string = ' ';
  // Size of cup in oz
  size:number[] = [12,16,21];
  // number of espresso shots
  espressoShots:number = 2 ; 
  // Sugar option 
  sugars:string[] = ['Sugar','Raw','Stevia','Splenda','Equal','Honey']; 
  // Milk options
  dairy:string[] = ['2%','Whole','Nonfat','Almond','Oat','Coconut'];
  // Flavor options
  flavor:string[] = ['Vanilla','Caramel','Hazelnut'];
  // topping option
  toppings:string[] = ['Whip cream','Nutmeg','Cinnamon'];



  constructor() { }
  ngOnInit(): void {
  }

  onSunmit(isValid:boolean|null){
    console.log('Thanks!')
  }

}
