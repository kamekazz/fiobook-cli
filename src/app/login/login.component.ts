import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email =''
  password=''

  btnDisabled = false

  constructor(
    private router:Router,
    private data:DataService,
    private rest: RestApiService
  ) { }

  ngOnInit() {
  }

  validate(){
    if (this.email) {
      if (this.password) {
        return true
      }else{
        this.data.error('Porfavor Entre Contrasella')
      }
    } else {
      this.data.error('El Correo Electrónico No Esta Engesado')
    }
  }

  async login(){
    this.btnDisabled=true
    try{
      if (this.validate()) {
        const data = await this.rest.post(
          'https://colbook.herokuapp.com/api/accounts/login',
          {
            email: this.email,
            password: this.password
          }
        )
        if (data['success']) {
          localStorage.setItem('token', data['token'])
          await this.data.getProfile()
          this.router.navigate(['/'])
        } else {
          this.data.error(data['message'])
        }
      }
    } catch(error){
      this.data.error(error['message'])
    }
    this.btnDisabled= false
  }
}
