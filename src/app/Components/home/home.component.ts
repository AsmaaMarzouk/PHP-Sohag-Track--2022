import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/Models/store-data';
import { StoreInfo } from 'src/app/Models/store-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// Interface
storeinfo: StoreInfo={name:'ITI Store',
                     coverImgURL:'https://fakeimg.pl/250x100/',
                     branches:["Qena","Sohag","Smart","Alex"]};


  //Classes  
 // property of class
  storeDataClass:StoreData;
   
  constructor() { 
    this.storeDataClass=new StoreData('ITI Store from class',
                                      'https://fakeimg.pl/250x100/',
                                      ['Qena','Sohag','Smart']);
  }
 






  ngOnInit(): void {
  }

}
