import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message = "";
  massageType = 'danger'


  user: any
  cartItems =0

  constructor(private router:Router, private rest:RestApiService) {
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart) {
        this.message= ''
      }
    })
  }


  error(message){
    this.massageType= 'danger'
    this.message = message
  }

  success(message){
    this.massageType= 'success'
    this.message = message
  } 
  warning(message){
    this.massageType= 'warning'
    this.message = message
  }

  async getProfile(){
    try {
      if (localStorage.getItem('token')) {
        const data = await this.rest.get( 'http://127.0.0.1:3030/api/accounts/profile')
        this.user = data['user']
      }
    } catch(error){
      this.error
    }
  }


}
