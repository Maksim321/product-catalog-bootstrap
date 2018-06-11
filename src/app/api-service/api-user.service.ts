import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  private rootUrl = 'http://smktesting.herokuapp.com';
  constructor(private http: HttpClient) { }

  registerUser(login, password) {	//Регистрация
    console.log("==Register==");
    return this.http.post(this.rootUrl + '/api/register/', {
      username: login,
      password: password
    });
  }

  loginUser(login, password) {		//Вход
  	console.log("==Login==");
    return this.http.post(this.rootUrl + '/api/login/', {
      username: login,
      password: password
    });
  }
  
  login(Token, username) {			//Сохраняем пользователя
    localStorage.setItem('Token', Token);
    localStorage.setItem('username', username);
  }  

  logout() {						//Выходим
    localStorage.removeItem('Token');
    localStorage.removeItem('username');
  }
  
  isLogged(){						//Есть ли сохраненный пользователь
	  if(localStorage.getItem('Token'))
		return true;
	return false;
  }
}
