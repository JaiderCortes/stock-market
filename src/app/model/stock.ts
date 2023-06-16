export class Stock {
  favorite: boolean = false;

  constructor(public name: string, public code: string,
    public price: number, public prevPrice: number){}

  isPosChange():boolean{
    return this.price >= this.prevPrice;
  }
}
