import { Component, OnInit } from '@angular/core';
import { Order } from './Order';

@Component({
  selector: 'coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
  points:number = 0;
  customerOrder:Order = new Order('Xavo', 'med', 3, 'sugar', 'milk', '', 'caramel');
  createdOrder:Order = new Order('Xavi', 'med', 2, 'sugar', 'soy milk', '', 'caramel');


  constructor() { }

  ngOnInit(): void {
  }

  compareOrders(){
    if(JSON.stringify(this.createdOrder) === JSON.stringify(this.customerOrder))
      this.points +=  7;
    else{
      //This is where the fun happens
      //Basically, there will be 7 variables that are comparisons on if a property of customerOrder matches created order
      //Those variables will be wrapped up into an array that will be looped through. 
      //The count of 'true' variables (matches) will be added up, divided by 2 and rounded down (with Math.floor)
      //That will determine the number of points that is added to the point total
      let matchCount = 0;
      let nameComp:boolean = this.customerOrder.name === this.createdOrder.name;
      let sizeComp:boolean = this.customerOrder.size === this.createdOrder.size;
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
    }
  }

}
