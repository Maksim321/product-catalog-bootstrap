import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiUserService } from '../api-service/api-user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private apiUserService: ApiUserService) { }

  ngOnInit() {		
    $('#overlay').fadeIn(200,function(){ 	//Красиво показать форму
      $('.modal_form') 
        .css('display', 'block') 
        .animate({opacity: 1, top: '50%'}, 200);
      }
    );
  }

  OnSubmit(dataForm: NgForm) {		//Вход пользователя
	if(dataForm.value['Login'].length<3){
		alert("Короткий логин");
		return;
	}
	else if (dataForm.value['Password'].length<3){
		alert("Короткий пароль");
		return;
	}
    this.apiUserService.loginUser(dataForm.value['Login'], dataForm.value['Password'])
      .subscribe((data: any) => {
        if (data.success == true) {
		  this.apiUserService.login(data.token, dataForm.value['Login']);
		  window.location.reload();
        }
        else
          alert(data.message);
      },
	  error =>  alert(error.statusText));
  }
}
