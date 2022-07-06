import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
// array of objects
// const routes: Routes = [
//   // First match wins
//  {path:'',redirectTo:'/Home',pathMatch:'full'}, // Default path
// {path: 'Home',component: HomeComponent},
// {path: 'Products',component:ProductsComponent},
// {path: 'Order',component: OrderMasterComponent},
// {path:'**',component:NotFoundComponent}, //wildcard path 
// ];

const routes: Routes = [
// {path: 'Main',component:MainLayoutComponent,children:[
{path: '',component:MainLayoutComponent,children:[
{path:'',redirectTo:'/Home',pathMatch:'full'}, // Default path
{path: 'Home',component: HomeComponent},
{path: 'Products',component:ProductsComponent},
{path: 'Products/:pid',component:ProductDetailsComponent},
{path: 'Order',component: OrderMasterComponent},
]},
{path:'**',component:NotFoundComponent}, //wildcard path 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
