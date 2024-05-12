import { Menu } from './../../../modules/Menu';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuApiService } from 'src/app/controllers/menu-api.service';
import { PartnersApiService } from 'src/app/controllers/partners-api.service';
import { Partners } from 'src/app/modules/Partners';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent {
  idMenu!:any;
  idPartner!:any;
  product=new Menu();
  partner=new Partners();
  message=false;
  constructor(private act:ActivatedRoute , private menuApi:MenuApiService, private partApi:PartnersApiService , private router:Router) {
    this.idMenu=this.act.snapshot.params['id'];
    this.menuApi.getById(this.idMenu).subscribe((data:any)=>{
      this.product=data;
      this.idPartner=this.product.partnerId;
      this.partApi.getById(this.idPartner).subscribe((data:any)=>{
        this.partner=data;
        console.log(this.idPartner);
      })
    })
    let login =JSON.parse(localStorage.getItem("loggedIn")||"false")
    console.log (login);
    if(!login){

    router.navigateByUrl("/notfound")
    }
  }
  update(){
    this.menuApi.put(this.idMenu,this.product).subscribe((data:any)=>{

    })
    this.message=true;
    setTimeout(()=> {
      this.router.navigateByUrl("/admin/listMenu/"+this.idPartner);
    },3000);
  }
}
