import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartnersApiService } from 'src/app/controllers/partners-api.service';

@Component({
  selector: 'app-admin-partners',
  templateUrl: './admin-partners.component.html',
  styleUrls: ['./admin-partners.component.css']
})
export class AdminPartnersComponent {
  partners!:any[];
  constructor(private api:PartnersApiService,private route:Router ){
    this.getAllData();
    let login =JSON.parse(localStorage.getItem("loggedIn")||"false")
    console.log (login);
    if(!login){

    route.navigateByUrl("/notfound")
    }
  }
  getAllData(){
    this.api.get().subscribe((data:any)=>{
      this.partners=data;
    })
  }
  delete(id:any){
    this.api.delete(id).subscribe((res)=>{this.getAllData();})

  }
}
