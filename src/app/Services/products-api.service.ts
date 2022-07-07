import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
private httpOptions={};

  constructor(private httpclient: HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
  }
  // function get all products
  // observerable => generic type 
  getAllProducts():Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.APIBaseURL}/products`);

  }
  // get products by category id
  getProductsByCatID(catID:number):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.APIBaseURL}/products?catID=${catID}`);
  }
  getProductByID(prdID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${environment.APIBaseURL}/products/${prdID}`);
  }
  addProduct(newPrd:Iproduct):Observable<Iproduct>{
    return this.httpclient.post<Iproduct>(`${environment.APIBaseURL}/products`,
                                              JSON.stringify(newPrd),
                                              this.httpOptions)
                                              // .pipe(
                                              //   retry(3),
                                              //   catchError((err)=>{
                                              //     return throwError(()=>{
                                              //       return new Error('Error occured ,please try again');
                                              //     })
                                              //   })
                                              // )
  }
}
