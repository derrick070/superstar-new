import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
// import { ScrollToModule } from 'ng2-scroll-to-el';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatTabsModule,MatGridListModule,MatToolbarModule,
   MatSidenavModule, MatIconModule, MatListModule,MatDividerModule} from '@angular/material';
import {SlideshowModule} from 'ng-simple-slideshow';
import { HomeComponent } from './home/home.component';
import { FeaturedProductsComponent, Dialog } from './featured-products/featured-products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailedProductsComponent, ProductDialog } from './detailed-products/detailed-products.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatDialogModule} from '@angular/material/dialog';

import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedProductsComponent,
    AboutusComponent,
    ContactusComponent,
    DetailedProductsComponent,
    MainNavComponent,
    Dialog,
    ProductDialog
  ],

  entryComponents: [Dialog,ProductDialog],

  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatTabsModule,MatGridListModule,MatToolbarModule,
    SlideshowModule,
    // ScrollToModule.forRoot(),
    MatCardModule,
    FlexLayoutModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AnimateOnScrollModule.forRoot(),
    MatDialogModule    ,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
