import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // ngOnInit(){

  //   let trans=document.querySelector('.trans');
  //   let trans2=document.querySelector('.trans2');
  //   window.addEventListener("scroll", ()=>{
  //     let now = window.scrollY;
  //     if(now > 900){
  //       trans?.classList.add('trans-right')
  //     }
  //     if(now < 900){
  //       trans?.classList.remove('trans-right')
  //     }
  //     if(now > 300 && now < 950){
  //       trans2?.classList.add('trans-left')
  //     }
  //     if(now < 300 || now > 950){
  //       trans2?.classList.remove('trans-left')
  //     }
  //   })
  // }
}
