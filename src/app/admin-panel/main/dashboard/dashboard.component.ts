import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsApiService } from 'src/app/controllers/admins-api.service';
import { Admins } from 'src/app/modules/Admins';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  admin=new Admins()
  constructor(private route:Router , private api:AdminsApiService){
    this.api.get().subscribe((data:any)=>{
      this.admin=data;
    })
    let login =JSON.parse(localStorage.getItem("loggedIn")||"false")
    console.log (login);
    if(!login){

    route.navigateByUrl("/notfound")
    }
  }
  signOut(){
    localStorage.setItem( "loggedIn", "false");
    this.route.navigateByUrl("/home");
  }
}
