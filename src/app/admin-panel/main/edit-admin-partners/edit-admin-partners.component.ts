import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnersApiService } from 'src/app/controllers/partners-api.service';
import { Partners } from 'src/app/modules/Partners';

@Component({
  selector: 'app-edit-admin-partners',
  templateUrl: './edit-admin-partners.component.html',
  styleUrls: ['./edit-admin-partners.component.css']
})
export class EditAdminPartnersComponent {
  partner = new Partners();
  id!:any;
  message=false;
  constructor(private api:PartnersApiService, private router:Router ,private act:ActivatedRoute){
    this.id =this.act.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data:any)=>{
      this.partner= data;
    })
    let login =JSON.parse(localStorage.getItem("loggedIn")||"false")
    console.log (login);
    if(!login){

    router.navigateByUrl("/notfound")
    }
  }
  update(){
    this.api.put(this.id,this.partner).subscribe((data:any)=>{
    });
    this.message=true;
    setTimeout(()=> {
      this.router.navigateByUrl("/admin/listPartners");
    },3000);
  }
}
