import { Component, OnInit } from '@angular/core';
import { Order } from './Order'

@Component({
  selector: 'coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
  names:string[] = ['Chase','Gus', 'Jacob', 'Josh', 'Nathan', 'Neely', 'Pato', 'Terra', 'Tiffany', 'Xavi'];
  sizes:string[] = ['Tall', 'Grande', 'Venti']
  shotCounts:number[] = [0, 1, 2, 3, 4];
  sweeteners:string[] = ['Sugar', 'Sugar in the Raw', 'Honey', 'Splenda', 'Stevia', 'Syrup', 'Cane Sugar'];
  milkTypes:string[] = ['2% Milk', 'Soy Milk', 'Almond Milk', 'Cocunut Milk', 'Oatmilk', 'Sweet Cream', 'Nonfat Milk', 'Whole Milk', 'Cream', 'Heavy Cream'] ;
  flavors:string[] = ['Apple Brown Sugar Syrup', 'Brown Sugar Syrup', 'Caramel Syrup', 'Chestnut Praline Syrup']
  toppings:string[] = ['Barista Cocoa Powder', 'Caramel Brulee', 'Chestnut Praline', 'Chocolate Curls']

  order:Order = new Order('','',0,'','','','')
  constructor() { }

  ngOnInit(): void {
    this.getRandomCoffee() 
  }

  getRandomCoffee() {
    this.order.name = this.names[this.getRandomInt(this.names.length)]
    this.order.size = this.sizes[this.getRandomInt(this.sizes.length)]
    this.order.shotCount = this.shotCounts[this.getRandomInt(this.shotCounts.length)]
    this.order.sweetener = this.sweeteners[this.getRandomInt(this.sweeteners.length)]
    this.order.milkType = this.milkTypes[this.getRandomInt(this.milkTypes.length)]
    console.log(this.order)
  }

  getRandomInt(max:number):number {
    return Math.floor(Math.random() * max);
  }

}
