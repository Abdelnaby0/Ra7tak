import { Partners } from 'src/app/modules/Partners';
import { PartnersApiService } from './../../../controllers/partners-api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin-partners',
  templateUrl: './add-admin-partners.component.html',
  styleUrls: ['./add-admin-partners.component.css']
})
export class AddAdminPartnersComponent {
  partner = new Partners();
  message=false;
  constructor(private api:PartnersApiService,private route:Router) {
    let login =JSON.parse(localStorage.getItem("loggedIn")||"false")
    console.log (login);
    if(!login){

    route.navigateByUrl("/notfound")
    }
  }
  submit(){
    this.api.post(this.partner).subscribe((data:any)=>{
      this.partner=data;
      console.log("posted");

    })

    this.message=true;
    setTimeout(()=> {
      this.route.navigateByUrl("/admin/listPartners");
    },3000);
  }
  }

