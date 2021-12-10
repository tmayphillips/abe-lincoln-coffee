export class Order{
    constructor(
        public name:string,
        public size:string,
        public espressoShots:number,
        public sugars:number,
        public dairy:string,
        public flavor:string
    ) {}
}