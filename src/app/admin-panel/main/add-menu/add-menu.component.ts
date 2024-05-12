import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuApiService } from 'src/app/controllers/menu-api.service';
import { PartnersApiService } from 'src/app/controllers/partners-api.service';
import { Menu } from 'src/app/modules/Menu';
import { Partners } from 'src/app/modules/Partners';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  product=new Menu();
  partner:Partners[]=[];
  idMenu!:any
  message=false;
  constructor(private menuApi:MenuApiService ,private route:Router,private partApi:PartnersApiService ,private act:ActivatedRoute){
    this.idMenu=this.act.snapshot.paramMap.get("id")
    this.partApi.get().subscribe((data:any)=>{
      this.partner = data;
    })
    let login =JSON.parse(localStorage.getItem("loggedIn")||"false")
    console.log (login);
    if(!login){

    route.navigateByUrl("/notfound")
    }
  }
  submit(){
    this.menuApi.post(this.product).subscribe((data:any)=>{

    })
    this.message=true;
    setTimeout(()=> {
      this.route.navigateByUrl("/admin/listMenu/"+this.idMenu);
    },3000);
  }
}
