import { Injectable } from '@angular/core';
import { Food } from '../model/food.interface';

@Injectable({
  providedIn: 'root'
})
export class QuickLunchService {

  burgers : Food[] = [
    {id:1, title:"hamburger", description:'tomate, pain , steak', price:10.00},
    {id:2, title:"hamburger", description:'tomate, pain , steak', price: 8.00},
    {id:3, title:"hamburger", description:'tomate, pain , steak', price: 5.50},
  ];

  pizza : Food[] = [
    {id:1, title:"marguerite", description:'tomate, pain , steak', price:10.00},
    {id:2, title:"Royale", description:'tomate, pain , steak', price: 8.00},
    {id:3, title:"Verde", description:'tomate, pain , steak', price: 5.50},
  ];

  pasta : Food[] = [
    {id:1, title:"Pennes", description:'tomate, pain , steak', price:10.00},
    {id:2, title:"Spaghetti", description:'tomate, pain , steak', price: 8.00},
  ];

  constructor() { }

  getBurgers():Food[]
  {
    return this.burgers;
  }

  getPizza():Food[]
  {
    return this.pizza;
  }
  getPasta():Food[]
  {
    return this.pasta;
  }
}
