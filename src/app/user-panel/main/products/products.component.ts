import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuApiService } from 'src/app/controllers/menu-api.service';
import { PartnersApiService } from 'src/app/controllers/partners-api.service';
import { Menu } from 'src/app/modules/Menu';
import { Partners } from 'src/app/modules/Partners';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  id!:any;
  partner=new Partners();
  menu:Menu[]=[];
  constructor(private act:ActivatedRoute, private partApi:PartnersApiService ,private menuApi:MenuApiService){
    this.id=this.act.snapshot.paramMap.get("id");
    this.partApi.getById(this.id).subscribe((data:any)=>{
      this.partner=data;
    })
    this.menuApi.get().subscribe((data:any)=>{
      data.forEach((element:any) => {
        if(element.partnerId ==this.id){
          this.menu.push(element);
        }
      });

    })
  }

}
