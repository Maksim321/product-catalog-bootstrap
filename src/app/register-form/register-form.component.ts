import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiUserService } from '../api-service/api-user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private apiUserService: ApiUserService) { }

  ngOnInit() {
    $('#overlay').fadeIn(200,function(){ 	//Красиво показать форму
      $('.modal_form') 
        .css('display', 'block') 
        .animate({opacity: 1, top: '50%'}, 200);
      }
    );
  }

  OnSubmit(dataForm: NgForm) {	//Регистрация пользователя
	if(dataForm.value['Login'].length<3){
		alert("Короткий логин");
		return;
	}
	else if (dataForm.value['Password'].length<3){
		alert("Короткий пароль");
		return;
	}
    this.apiUserService.registerUser(dataForm.value['Login'], dataForm.value['Password'])
      .subscribe((data: any) => {
        if (data.success == true) {
		  alert("Зарегистрировались");
		  this.apiUserService.login(data.token, dataForm.value['Login']);
		  window.location.reload();
        }
		else{
		  alert(data.message);
		}
      });
  }
}
