import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-restaurant-dashbord',
  templateUrl: './restaurant-dashbord.component.html',
  styleUrls: ['./restaurant-dashbord.component.css']
})
export class RestaurantDashbordComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Menu du jour', cols: 2, rows: 2 },
          { title: 'Burgers', cols: 2, rows: 2 },
          { title: 'Pasta', cols: 2, rows: 2 },
          { title: 'Pizza', cols: 2, rows: 2 }
        ];
      }

      return [
        { title: 'Menu du jour', cols: 2, rows: 2 },
        { title: 'Burgers', cols: 2, rows: 2 },
        { title: 'Pasta', cols: 2, rows: 2 },
        { title: 'Pizza', cols: 2, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
