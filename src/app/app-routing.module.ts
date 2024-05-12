import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './user-panel/main/hero/hero.component';
import { TermsAndConditionsComponent } from './user-panel/shared/footer/links/terms-and-conditions/terms-and-conditions.component';
import { FaqComponent } from './user-panel/shared/footer/links/faq/faq.component';
import { PrivacyPolicyComponent } from './user-panel/shared/footer/links/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './user-panel/shared/footer/links/contact-us/contact-us.component';
import { OurPartnersComponent } from './user-panel/main/our-partners/our-partners.component';

//admin imports
import { DashboardComponent } from './admin-panel/main/dashboard/dashboard.component';
import { ProductsComponent } from './user-panel/main/products/products.component';
import { AdminPartnersComponent } from './admin-panel/main/admin-partners/admin-partners.component';
import { AddAdminPartnersComponent } from './admin-panel/main/add-admin-partners/add-admin-partners.component';
import { EditAdminPartnersComponent } from './admin-panel/main/edit-admin-partners/edit-admin-partners.component';
import { OrdersComponent } from './admin-panel/main/orders/orders.component';
import { ListMenuComponent } from './admin-panel/main/list-menu/list-menu.component';
import { AddMenuComponent } from './admin-panel/main/add-menu/add-menu.component';
import { StatsComponent } from './admin-panel/main/stats/stats.component';
import { EditMenuComponent } from './admin-panel/main/edit-menu/edit-menu.component';
import { OffersComponent } from './user-panel/main/offers/offers.component';
import { ErrorPageComponent } from './user-panel/error-page/error-page.component';
import { EditAdminComponent } from './admin-panel/shared/navbar/edit-admin/edit-admin.component';

const routes: Routes = [
  {path : "", redirectTo: "home"  , pathMatch:"full"},
  { path: "home", component:HeroComponent },
  { path:"terms" ,title:"Terms and Conditions",  component:TermsAndConditionsComponent},
  { path:"faq" ,title:"Frequently Asked Questions (FAQ)", component:FaqComponent},
  { path:"privacy" , title:"Privacy Policy", component:PrivacyPolicyComponent},
  { path:"contact" , title:"ContactUs", component:ContactUsComponent},
  { path:"partners" , title:"Our Partners", component:OurPartnersComponent},
  { path:"offers" , title:"Offers", component:OffersComponent},
  { path:"product/:id" , title:"Products", component:ProductsComponent},
  // admin paths
  { path: "admin",
  children:[
      { path : "editAdmin/:id" , title:"Admin | Edit" , component:EditAdminComponent},
      { path : "dashboard" , title:"Admin | Dashboard" , component:DashboardComponent},
      { path : "stats" , title:"Admin | Stats" , component:StatsComponent},
      { path : "orders" , title:"Admin | Orders" , component:OrdersComponent},
      { path : "listPartners" , title:"Admin | Partners" , component:AdminPartnersComponent},
      { path : "addPartner" , title:"Admin | Add Partner" , component:AddAdminPartnersComponent},
      { path : "editPartner/:id" , title:"Admin | Edit Partner" , component:EditAdminPartnersComponent},
      //menu
      { path : "listMenu/:id" , title:"Admin | Menu" , component:ListMenuComponent},
      { path : "addProduct" , title:"Admin | Add Product" , component:AddMenuComponent},
      { path : "editProduct/:id" , title:"Admin | Edit Product" , component:EditMenuComponent},


    ]
  },
  { path:"**" , title:"Error404",component:ErrorPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
