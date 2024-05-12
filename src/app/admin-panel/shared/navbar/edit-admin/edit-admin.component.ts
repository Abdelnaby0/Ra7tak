import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminsApiService } from 'src/app/controllers/admins-api.service';
import { Admins } from 'src/app/modules/Admins';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {
  message=false;
  admin=new Admins();
  id!:any;
  constructor(private api:AdminsApiService , private router:Router , private act:ActivatedRoute){
    this.id=this.act.snapshot.paramMap.get("id");
    this.api.getById(this.id).subscribe((data:any)=>{
      this.admin=data;
    })
    let login =JSON.parse(localStorage.getItem("loggedIn")||"false")
    console.log (login);
    if(!login){

    router.navigateByUrl("/notfound")
    }
  }

  update(){
    this.api.put(this.id,this.admin).subscribe((data:any)=>{

    })

    this.message=true;
    setTimeout(()=> {
      this.router.navigateByUrl("/admin/dashboard");
    },3000);
  }
}
