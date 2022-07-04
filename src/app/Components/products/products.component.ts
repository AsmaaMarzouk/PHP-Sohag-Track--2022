import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
// date
todayDate:Date = new Date();
  // declare array  of iproducts
  //catID (1 => mobiles),(2=>TV),(3=>Labtop) 
  prdList:Iproduct[];
  constructor() { 
    this.prdList=[
      {id:1,name: 'Samsung',price:12000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:8,name: 'Redmi',price:22000,quantity:1,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:20,name: 'LG',price:25000,quantity:3,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:33,name: 'Tornado',price:33000,quantity:2,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:15,name: 'Lenovo',price:45000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:3},
      {id:17,name: 'Dell',price:17500,quantity:5,imgURL:'https://fakeimg.pl/250x100',catID:3},
    ] ;
  }
  trackByFunc(index: number,item:Iproduct){
    return item.id;

  }

  ngOnInit(): void {
  }

}
