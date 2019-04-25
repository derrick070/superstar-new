import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedProductsComponent } from './detailed-products/detailed-products.component';
import { HomeComponent } from './home/home.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'app-home',component:HomeComponent},
  {path: 'allproducts',component:DetailedProductsComponent},
  {path: 'products',component:FeaturedProductsComponent},
  {path: 'aboutus',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
