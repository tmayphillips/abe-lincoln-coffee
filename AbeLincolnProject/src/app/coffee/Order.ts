export class Order{
    constructor(
        public name:string,
        public sizes:string,
        public shotCount:number,
        public sweetener:string,
        public milkType:string,
        public flavor:string,
        public topping:string
    ) {}
}