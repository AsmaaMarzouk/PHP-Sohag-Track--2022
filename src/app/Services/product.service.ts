import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prdList:Iproduct[];

  constructor() { 
    this.prdList=[
      {id:1,name: 'Samsung',price:12000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:8,name: 'Redmi',price:22000,quantity:1,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:20,name: 'LG',price:25000,quantity:3,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:33,name: 'Tornado',price:33000,quantity:2,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:15,name: 'Lenovo',price:45000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:3},
      {id:17,name: 'Dell',price:17500,quantity:5,imgURL:'https://fakeimg.pl/250x100',catID:3}
    ] ;
  }

  // function return all products
  getAllProducts():Iproduct[]{
    return this.prdList;
  }

  //Function Get products with category id
  getProductsByCatID(catID:number):Iproduct[]{
    if(catID==0){
      return this.getAllProducts();
    }
    else{ 
      return this.prdList.filter(prd=>prd.catID==catID);
    }
  }

  // function get product by id
  getProductByID(prdID:number):Iproduct|undefined{
    return this.prdList.find(prd=>prd.id==prdID);
  }

  searchProductByName(prdName:string):Iproduct|undefined{
    return this.prdList.find(prd=>prd.name==prdName);
  }

  getProductList():number[]{
    return this.prdList.map(prd=>prd.id);
  }


  //Hint For lab assignment
  addProduct(product:Iproduct) {
    this.prdList.push(product);
  }
  
}
