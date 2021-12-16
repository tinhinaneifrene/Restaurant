import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../model/food.interface';

@Component({
  selector: 'app-restaurant-dashbord',
  templateUrl: './restaurant-dashbord.component.html',
  styleUrls: ['./restaurant-dashbord.component.css']
})
export class RestaurantDashbordComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Burgers', cols: 2, rows: 2 , id:'brg'},
          { title: 'Pasta', cols: 2, rows: 2, id:'pasta' },
          { title: 'Pizza', cols: 2, rows: 2 , id:'piza'}
        ];
      }

      return [
        { title: 'Burgers', cols: 2, rows: 2,id:'brg' },
        { title: 'Pasta', cols: 2, rows: 2, id:'pasta' },
        { title: 'Pizza', cols: 2, rows: 2, id:'piza' }
      ];
    })
  );

  burgers : Food[] = [];
  pizzas : Food[] = [];
  pasta : Food[] =[];

  constructor(private breakpointObserver: BreakpointObserver,
              private quickLunchService : QuickLunchService) 
            {}

  ngOnInit()
  {
    this.burgers= this.quickLunchService.getBurgers();
    this.pizzas = this.quickLunchService.getPizza();
    this.pasta = this.quickLunchService.getPasta();

  }



}
