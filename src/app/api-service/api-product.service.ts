import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
	
  private rootUrl = 'http://smktesting.herokuapp.com';
  
  constructor(private http: HttpClient) { }
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  getProducts() {	//Получить список продуктов
    console.log("==Products==");
    return this.http.get(this.rootUrl + '/api/products/');
  }
  
  getProductReview(id) { 	//Получить список отзывов
    console.log("==Products==");
    return this.http.get(this.rootUrl + '/api/reviews/' + id);
  }
  
  postReviews(text, rate, id) {		//Отправка отзыва
  	console.log("==Post reviews==");
	let headers = new HttpHeaders();
	headers.append('Authorization', 'Token ' +localStorage.getItem('Token'));
	headers = this._headers.append('Authorization', 'Token ' +localStorage.getItem('Token'));
    return this.http.post(this.rootUrl + '/api/reviews/' + id, {
      rate: rate,
      text: text
    },{ headers: headers });
  }
}
