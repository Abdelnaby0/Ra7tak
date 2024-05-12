import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  constructor(private route:Router){
    let login =JSON.parse(localStorage.getItem("loggedIn")||"false")
    console.log (login);
    if(!login){

    route.navigateByUrl("/notfound")
    }
  }
}
