import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsApiService } from 'src/app/controllers/admins-api.service';
import { Admins } from 'src/app/modules/Admins';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  admin=new Admins();
  message=false;
  constructor(private api:AdminsApiService,private router:Router){}
  login(){
    this.api.get().subscribe((data:any)=>{
      let user= data.find((user:any)=>{
        return(this.admin.email===user.email && this.admin.password===user.password)
      })

    if(user){
    localStorage.setItem("loggedIn" , "true");
    this.router.navigateByUrl("/admin/dashboard");
    }
    else{
      localStorage.setItem("loggedIn" , "false");
      this.message= true;
      setTimeout(() => {
        this.message=false;
      }, 3000);
    }
    })
  }
}
