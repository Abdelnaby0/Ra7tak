
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule}from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
//user panel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './user-panel/shared/navbar/navbar.component';
import { FooterComponent } from './user-panel/shared/footer/footer.component';
import { HeroComponent } from './user-panel/main/hero/hero.component';
import { TermsAndConditionsComponent } from './user-panel/shared/footer/links/terms-and-conditions/terms-and-conditions.component';
import { FaqComponent } from './user-panel/shared/footer/links/faq/faq.component';
import { PrivacyPolicyComponent } from './user-panel/shared/footer/links/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './user-panel/shared/footer/links/contact-us/contact-us.component';
// admin panel
import { NavbarComponent as adminNavbar } from './admin-panel/shared/navbar/navbar.component';
import { DashboardComponent } from './admin-panel/main/dashboard/dashboard.component';
import { OurPartnersComponent } from './user-panel/main/our-partners/our-partners.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    TermsAndConditionsComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    DashboardComponent,
    adminNavbar,
    OurPartnersComponent,
    ProductsComponent,
    AdminPartnersComponent,
    AddAdminPartnersComponent,
    EditAdminPartnersComponent,
    OrdersComponent,
    ListMenuComponent,
    AddMenuComponent,
    StatsComponent,
    EditMenuComponent,
    OffersComponent,
    ErrorPageComponent,
    EditAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
