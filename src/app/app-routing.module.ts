import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedProductsComponent } from './detailed-products/detailed-products.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'allproducts',component:DetailedProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
