import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsApiService } from 'src/app/controllers/admins-api.service';
import { Admins } from 'src/app/modules/Admins';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  admin=new Admins()
  constructor(private route:Router , private api : AdminsApiService){
    this.api.get()
  }
  signOut(){
    localStorage.setItem( "loggedIn", "false");
    this.route.navigateByUrl("/home");
  }
}
