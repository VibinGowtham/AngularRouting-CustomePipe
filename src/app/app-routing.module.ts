import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
// import {FirstComponentComponent} from 
const routes:Routes=[
 { path:'first',component:FirstComponentComponent},
 { path:'second',component:SecondComponentComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
