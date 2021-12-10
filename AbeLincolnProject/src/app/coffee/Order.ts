export class Order{
    constructor(
        public name:string,
        public size:string,
        public shotCount:number,
        public sweetener:string,
        public milkType:string,
        public flavor:string,
        public topping:string
    ) {}
}