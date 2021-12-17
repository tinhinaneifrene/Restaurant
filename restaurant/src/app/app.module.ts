import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPrincipaleComponent } from './nav-principale/nav-principale.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import {Routes,Router, RouterModule } from '@angular/router' ;
import { ReactiveFormsModule , FormsModule} from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import { RestaurantDashbordComponent } from './restaurant-dashbord/restaurant-dashbord.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { RestaurantTableComponent } from './restaurant-table/restaurant-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepicker} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


const routes : Routes =[
  { path:"", component:HomeComponent},
  { path:"carte" , component:CardComponent},
  { path:"reservation" , component:ReserveComponent},
  { path:"contact" , component:ContactComponent}

  
]
@NgModule({
  declarations: [
    AppComponent,
    NavPrincipaleComponent,
    HomeComponent,
    CardComponent,
    ReserveComponent,
    ContactComponent,
    RestaurantDashbordComponent,
    RestaurantTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
     
    MatGridListModule,
    MatDatepickerModule,
     
    MatMenuModule,
    ReactiveFormsModule,
    MatNativeDateModule,
     
    MatTableModule,
     
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
     
    MatSortModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
