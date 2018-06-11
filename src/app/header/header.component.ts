import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { ApiUserService } from '../api-service/api-user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ModalFormComponent:any;
  loggedIn:boolean=false;
  constructor(private apiUserService: ApiUserService) { }

  ngOnInit() {
	this.loggedIn = this.apiUserService.isLogged();

    $('body').on('click', '.modal_close', ()=>{		//закрываем окно
        this.ModalFormComponent=null;
    });    
  }
  
  LogIn(){		//Вызываем окно логина
	console.log("click");
	this.ModalFormComponent=LoginFormComponent;
  }

  Register(){	//Окно регистрации
	console.log("click");
	this.ModalFormComponent=RegisterFormComponent;
  }
  
  LogOut(){		//Выход пользователя
	this.apiUserService.logout();  
  }
}
