import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
   ngOnInit(){

     let trans=document.querySelector('.trans');
     let trans2=document.querySelector('.trans2');
     let trans3=document.querySelector('.trans3');
     window.addEventListener("scroll", ()=>{
       let now = window.scrollY;
       if(now > 900){
         trans?.classList.add('trans-right')
         trans3?.classList.add('trans-rotate')
       }

       if(now > 300){
         trans2?.classList.add('trans-left')
       }
     })
   }
}
