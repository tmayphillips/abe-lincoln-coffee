import { Component, OnInit } from '@angular/core';
import { Order } from './Order';

@Component({
  selector: 'coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
  orderVisible:boolean = true;
  points:number = 0;
  customerOrder:Order = new Order('Xavo', 'med', 3, 'sugar', 'milk', 'None', 'caramel');
  createdOrder:Order = new Order('', '', 0, '', '', '', '');
  customer:Order[]=[];
  names:string[] = ['Chase','Gus', 'Jacob', 'Josh', 'Nathan', 'Neely', 'Pato', 'Terra', 'Tiffany', 'Xavi'];
  sizes:string[] = ['Tall', 'Grande', 'Venti']
  shotCounts:number[] = [0, 1, 2, 3, 4];
  sweeteners:string[] = ['None', 'Sugar', 'Sugar in the Raw', 'Honey', 'Splenda', 'Stevia', 'Syrup', 'Cane Sugar'];
  milkTypes:string[] = ['None', '2% Milk', 'Soy Milk', 'Almond Milk', 'Cocunut Milk', 'Oatmilk', 'Sweet Cream', 'Nonfat Milk', 'Whole Milk', 'Cream', 'Heavy Cream'] ;
  flavors:string[] = ['None', 'Brown Sugar', 'Caramel', 'Chestnut Praline', 'Hazelnut', 'Irish Cream', 'Peppermint', 'Raspberry', 'Toffee Nut', 'Vanilla']
  toppings:string[] = ['None', 'Barista Cocoa Powder', 'Caramel Brulee', 'Chestnut Praline', 'Chocolate Curls', 'Cinnamon Dolce', 'Holiday Sugar', 'Pumpkin Spice', 'Red and Green Sprinkle', 'Caramel Drizzle', 'Mocha Drizzle', 'Spiced Apple Drizzle', 'Cinnamon Powder', 'Whipped Cream']
  highScore:number = 0;
  newHighScore:boolean = false;
  roundCounter:number = 0;
  rounds:number = 5;

  order:Order = new Order('','',0,'','','','')
  constructor() { }

  ngOnInit(): void {
    this.getHighScore()
  }

  getRandomCoffee() {
    this.customerOrder.name = this.names[this.getRandomInt(this.names.length)]
    this.customerOrder.sizes = this.sizes[this.getRandomInt(this.sizes.length)]
    this.customerOrder.shotCount = this.shotCounts[this.getRandomInt(this.shotCounts.length)]
    this.customerOrder.sweetener = this.sweeteners[this.getRandomInt(this.sweeteners.length)]
    this.customerOrder.milkType = this.milkTypes[this.getRandomInt(this.milkTypes.length)]
    this.customerOrder.flavor = this.flavors[this.getRandomInt(this.flavors.length)]
    this.customerOrder.topping = this.toppings[this.getRandomInt(this.toppings.length)]
    console.log(this.customerOrder)
    this.roundCounter++
  }

  getRandomInt(max:number):number {
    return Math.floor(Math.random() * max);
  }

  compareOrders(){
    console.log(this.createdOrder)
    console.log(this.customerOrder)
    if(JSON.stringify(this.createdOrder) === JSON.stringify(this.customerOrder))
      this.points +=  7;
    else{
      //This is where the fun happens
      //Basically, there will be 7 variables that are comparisons on if a property of customerOrder matches created order
      //Those variables will be wrapped up into an array that will be looped through. 
      //The count of 'true' variables (matches) will be added up, divided by 2 and rounded down (with Math.floor)
      //That will determine the number of points that is added to the point total
      let matchCount = 0;
      let nameComp:boolean = this.customerOrder.name.toLowerCase() === this.createdOrder.name.toLowerCase();
      let sizeComp:boolean = this.customerOrder.sizes === this.createdOrder.sizes;
      let shotComp:boolean = this.customerOrder.shotCount === this.createdOrder.shotCount;
      let sugarComp:boolean = this.customerOrder.sweetener === this.createdOrder.sweetener;
      let dairyComp:boolean = this.customerOrder.milkType === this.createdOrder.milkType;
      let flavorComp:boolean = this.customerOrder.flavor === this.createdOrder.flavor;
      let topComp:boolean = this.customerOrder.topping === this.createdOrder.topping;

      let comparisons = [nameComp, sizeComp, shotComp, sugarComp, dairyComp, flavorComp, topComp]
      for(let comp of comparisons)
      {
        if(comp)
          matchCount++
      }

      this.points += matchCount;
      console.log(`points: ${this.points}`)
      if (this.points > this.highScore) {
        this.highScore = this.points
      }
    }
    
  }

  onSubmit(isValid:boolean|null){
    console.log(this.createdOrder)
    this.compareOrders();

    if (this.roundCounter < this.rounds) {
      this.getRandomCoffee();
      this.showOrder();
    } else if (this.roundCounter === this.rounds && this.points > this.highScore) {
        this.newHighScore === true;
        localStorage.setItem("coffeePoints", JSON.stringify(this.points))
    }
  }

  getHighScore() {
    let data:string | null
    if (localStorage.getItem("coffeePoints") != null) {
      data = JSON.parse(localStorage.getItem('coffeePoints') as string)
      this.highScore = Number(data)
    } else {
      this.highScore = 0
    }
  }
  

  hideOrder(){
    if (this.orderVisible)
    {
      setTimeout(() =>{
        this.orderVisible = !this.orderVisible;
      }, 10000)
    }
  }

  showOrder(){
    if (this.roundCounter <= this.rounds) {
      this.orderVisible = true;
      this.hideOrder();
    } 
  }

  onClear() {
    this.roundCounter = 0;
    this.points = 0;
    this.getRandomCoffee();
    this.showOrder()
    this.newHighScore === false;
  }
}
