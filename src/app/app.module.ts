import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes =[
    { path: '', component: HomePageComponent},
    { path: 'product/:id', component: ProductPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
	RouterModule.forRoot(appRoutes),
    DynamicModule.withComponents([LoginFormComponent, RegisterFormComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
