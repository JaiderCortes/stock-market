import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit{

  public stock: Stock;

  constructor() {}

  ngOnInit(){
    this.stock = new Stock('ASUS Zenbook S 13 OLED', 'AZS13', 2400, 2350);
  }

  toggleFavorite(){
    alert('Adding to favorite...')
    this.stock.favorite = !this.stock.favorite;
    console.log('Added to favorite...');
    alert('Added to favorite...')
  }
}
