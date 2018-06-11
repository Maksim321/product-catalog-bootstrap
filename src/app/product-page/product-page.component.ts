import { Component, OnInit } from '@angular/core';
import {ApiProductService} from '../api-service/api-product.service'
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiUserService } from '../api-service/api-user.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  private sub: any;
  private rating:number;
  id:number;
  reviews:any;
  product:any;
  ratingProd:any;
  loggedIn:any;
  constructor(private apiProductService: ApiProductService,
			  private apiUserService: ApiUserService,
			  private route: ActivatedRoute) { }
  
  ngOnInit() {
	this.rating = 1;
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
    });
	
	this.loggedIn = this.apiUserService.isLogged();
	
    this.apiProductService.getProductReview(this.id)	//Получим список отзывов
      .subscribe((data: any) => {
		  this.reviews = data;
		  this.countRatingProd(data);
          console.log(data);
		  console.log(this.ratingProd);
      });
	
    this.apiProductService.getProducts()	//Получим продукты
      .subscribe((data: any) => {
		  data.forEach((value)=> {
			  if(value.id == this.id)
				this.product = value;
		  });
      });
  }
  
  OnSubmit(dataForm: NgForm){	//Отправим отзыв
	console.log(dataForm.value['text-review']);
    this.apiProductService.postReviews(dataForm.value['text-review'], this.rating, this.id)
      .subscribe((data: any) => {
		  window.location.reload();
      },
	  error =>  alert(error.statusText));
  }
  
  setRating(rating){
	  this.rating = rating;
  }
  
  countRatingProd(prod){	//Посчитаем рейтинг продукта
	let rat = 0;
	if(prod.length){
		prod.forEach((value)=> {
		  rat += value.rate;
		});
		this.ratingProd = (rat/prod.length).toFixed(2);
	}
	else
		this.ratingProd = 0;
  }

}
