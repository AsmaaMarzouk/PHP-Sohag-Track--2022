import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit,AfterViewInit {
  selectedCatID: number=0;
  receivedOrderTotalPrice: number=0;
catList:Icategory[];

// viewChild
// @ViewChild('clientName') clientNameRef:ElementRef|null=null;
// @ViewChild('clientName') clientNameRef:ElementRef|undefined=undefined;
// ? => safe navigation
// @ViewChild('clientName') clientNameRef?:ElementRef;

// angular 12 => ! (non null assertion operator)
@ViewChild('clientName') clientNameRef!:ElementRef;
@ViewChild(ProductsComponent) productsRef!:ProductsComponent;
  constructor() { 
    this.catList=[
      {id:1,name: 'Mobiles'},
      {id:2,name: 'TV'},
      {id:3,name: 'Labtops'},

    ]; 
  }
 

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // if(this.clientNameRef)
    // this.clientNameRef.nativeElement.value="Value from ts file..";
    // console.log(this.productsRef.prdListOfCat);
    
  }

  onTotalPriceChanged(totalPrice:number){
    this.receivedOrderTotalPrice=totalPrice;
  }


  getNewArr(){
    console.log(this.productsRef.prdListOfCat);
    
  }

}
