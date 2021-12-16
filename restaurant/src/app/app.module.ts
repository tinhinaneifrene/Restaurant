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

import {Routes,Router, RouterModule } from '@angular/router' ;

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';

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
    ContactComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
