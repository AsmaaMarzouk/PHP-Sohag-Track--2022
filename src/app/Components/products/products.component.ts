import { Component, Input, OnChanges, OnInit, SimpleChanges,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers:[ProductService]
})
export class ProductsComponent implements OnInit,OnChanges {
// Day2
// date
todayDate:Date = new Date();
  // declare array  of iproducts
 
  //catID (1 => mobiles),(2=>TV),(3=>Labtop) 
    // Day4
  // prdList:Iproduct[];

  // Day3
  prdListOfCat:Iproduct[]=[];
 @Input() receivedCatID:number = 0;
//  generic
 @Output() totatPriceChanged:EventEmitter<number>;

  // total price
  orderTotalPrice:number = 0;

  // Day4 => Inject
  constructor(private prdService:ProductService,
              private router:Router,
              private productAPIService:ProductsApiService) {
    this.totatPriceChanged=new EventEmitter<number>();
    // Day4
    // this.prdList=[
    //   {id:1,name: 'Samsung',price:12000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:1},
    //   {id:8,name: 'Redmi',price:22000,quantity:1,imgURL:'https://fakeimg.pl/250x100',catID:1},
    //   {id:20,name: 'LG',price:25000,quantity:3,imgURL:'https://fakeimg.pl/250x100',catID:2},
    //   {id:33,name: 'Tornado',price:33000,quantity:2,imgURL:'https://fakeimg.pl/250x100',catID:2},
    //   {id:15,name: 'Lenovo',price:45000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:3},
    //   {id:17,name: 'Dell',price:17500,quantity:5,imgURL:'https://fakeimg.pl/250x100',catID:3}
    // ] ;
  }
  // Day3
  ngOnChanges(): void {
    // this.getProductsOfCat();
    // Day4
  // this.prdListOfCat = this.prdService.getProductsByCatID(this.receivedCatID);
  
  // Day5
  this.productAPIService.getProductsByCatID(this.receivedCatID).subscribe(prdList=>{
    this.prdListOfCat=prdList;
  })

  }
  
  ngOnInit(): void {
    // this.getProductsOfCat();
    // Day4
   // this.prdListOfCat = this.prdService.getProductsByCatID(this.receivedCatID);
  //  Day5
  this.productAPIService.getAllProducts().subscribe(prdList=>{
    this.prdListOfCat=prdList;
  })

  }

  trackByFunc(index: number,item:Iproduct){
    return item.id;

  }

  // Day3
  // Filter data by category
  // private getProductsOfCat(){

  //   if(this.receivedCatID==0){
  //    this.prdListOfCat= Array.from(this.prdList);
  //    return;
  //   }
  //    this.prdListOfCat =  this.prdList.filter((prd)=>prd.catID==this.receivedCatID);

  // }

  // Calculate total price of products
  updateTotalPrice(prdPrice:number,itemsCount:any){

    // this.orderTotalPrice += (prdPrice*itemsCount);
    //Ways of Convert from string to number
    // this.orderTotalPrice += (prdPrice* parseInt(itemsCount));
    // this.orderTotalPrice += (prdPrice* Number(itemsCount));
    // this.orderTotalPrice += (prdPrice* itemsCount as number);
    this.orderTotalPrice += (prdPrice* +itemsCount);

    // to fire event use emit
    this.totatPriceChanged.emit(this.orderTotalPrice);



  }


  openProductDetails(prdID:number){

    this.router.navigate(['Products',prdID]);

  }
}
