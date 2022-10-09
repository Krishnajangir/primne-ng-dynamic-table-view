import { Component, OnInit } from '@angular/core';
import { Products } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products: Products[] = [];
  cols: any[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      { code: 12, name: 'test', category: 'test', quantity: 300, rating: 4 },
      { code: 12, name: 'test', category: 'test', quantity: 300, rating: 5 },
      { code: 12, name: 'test', category: 'test', quantity: 300, rating: 6 },
      { code: 12, name: 'test', category: 'test', quantity: 300, rating: 7 },
    ];

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
  }
}
