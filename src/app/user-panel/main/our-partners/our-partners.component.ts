import { Component } from '@angular/core';
import { PartnersApiService } from 'src/app/controllers/partners-api.service';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent {
  partner!:any[];
  constructor(private api:PartnersApiService ){
    this.getAllData();
  }
  getAllData(){
    this.api.get().subscribe((data:any)=>{
      this.partner=data;
    })
  }
}
