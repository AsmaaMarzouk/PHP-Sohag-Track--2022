import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  catList:Icategory[];
  newPrd:Iproduct ={} as Iproduct;

  // intialize , inject
  constructor(private productAPIService:ProductsApiService,
              private router:Router) {
                this.catList=[
                  {id:1,name: 'Mobiles'},
                  {id:2,name: 'TV'},
                  {id:3,name: 'Labtops'},
            
                ]; 
               }

  ngOnInit(): void {
  }


  InsertProduct(){
    // First case static data 
    // let testPrd:Iproduct={
    //   id:33,
    //   name: 'Tornado',
    //   price:33000,
    //   quantity:2,
    //   imgURL:'https://fakeimg.pl/250x100',
    //   catID:2
    // }

    // this.productAPIService.addProduct(testPrd).subscribe({
    //   next:(prd)=>{
    //     this.router.navigate(['/Products']);
    //   },
    //   error:(err)=>{
    //     alert("Error occured");
    //   }
    // })

    // Second test case
      this.productAPIService.addProduct(this.newPrd).subscribe({
      next:(prd)=>{
        this.router.navigate(['/Products']);
      },
      error:(err)=>{
        alert("Error occured");
      }
    })

  }

}
