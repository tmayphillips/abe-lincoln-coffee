export class Order{
    constructor(
        public name:string,
        public size:string,
        public espressoShots:number,
        public sugars:string,
        public dairy:string,
        public flavor:string,
        public toppings:string
    ) {}
}