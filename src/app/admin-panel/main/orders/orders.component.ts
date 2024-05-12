import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private route:Router){
    let login =JSON.parse(localStorage.getItem("loggedIn")||"false")
    console.log (login);
    if(!login){

    route.navigateByUrl("/notfound")
    }
  }
}
