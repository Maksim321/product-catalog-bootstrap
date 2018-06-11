import { Component, OnInit } from '@angular/core';
import {ApiProductService} from '../api-service/api-product.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products:any;
  
  constructor(private apiProductService: ApiProductService) { }

  ngOnInit() {
    this.apiProductService.getProducts()	//Получить список продуктов
      .subscribe((data: any) => {
		  this.products = data;
      });
  }

}
