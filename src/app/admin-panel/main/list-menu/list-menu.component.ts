
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuApiService } from 'src/app/controllers/menu-api.service';
import { PartnersApiService } from 'src/app/controllers/partners-api.service';
import { Menu } from 'src/app/modules/Menu';
import { Partners } from 'src/app/modules/Partners';


@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent {
  partners=new Partners();
  products:Menu[]=[];
  id!:any;
  constructor(private partnerApi:PartnersApiService ,private menuApi:MenuApiService , private act:ActivatedRoute ,private route:Router){
    this.getProductData();
    this.id=this.act.snapshot.paramMap.get("id");
    this.partnerApi.getById(this.id).subscribe((data:any)=>{
      this.partners=data;
    })
    let login =JSON.parse(localStorage.getItem("loggedIn")||"false")
    console.log (login);
    if(!login){

    route.navigateByUrl("/notfound")
    }
  }
  getProductData(){
    this.menuApi.get().subscribe((data:any)=>{
      data.forEach((element:any) => {
        if (element.partnerId == this.id){
          this.products.push(element);
        }
      });
    })
  }
  deleteProduct(id:any){
    this.menuApi.delete(id).subscribe((res:any)=>{
      this.products=[]
      this.getProductData();
    })
  }
}
