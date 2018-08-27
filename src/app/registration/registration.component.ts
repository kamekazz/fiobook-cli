import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email = ''
  tienda = ''
  password =''
  password1 =''
  telefono =''


  btnDisabled = false

  constructor(
    private router: Router,
    private data: DataService,
    private rest: RestApiService
  ) { }

  ngOnInit() {
  }

  validate(){
    if (this.tienda) {
      if (this.email) {
        if (this.password) {
          if (this.password1) {
            if (this.password === this.password1) {
              return true
            } else {
              this.data.error('passwords do not match')
            }
          } else {
            this.data.error('confirmation password is not entered')
          }
        } else {
          this.data.error('password is not entered')
        }
      }else{
        this.data.error('email is not entered')
      }
    } else {
      this.data.error('name in not entered')
    }
  }

  async register(){
    this.btnDisabled = true
    try{
      if (this.validate()) {
        const data = await this.rest.post(
          'https://colbook.herokuapp.com/api/accounts/registarl',
          {
            tienda: this.tienda,
            email: this.email,
            password: this.password,
            telefono: this.telefono
          }
        )
        if (data['success']) {
          this.router.navigate([''])
          localStorage.setItem('token',data['token'])
          await this.data.getProfile()
          this.router.navigate(['profile/address'])
            .then(()=>{
              this.data.success(
                'registration successfull please your shipping addree below'
              )
            }).catch(error => this.data.error(error))
        } else {
          this.data.error(data['message'])
        }
      }
    } catch(error){
      this.data.error(error['message'])
    }
    this.btnDisabled = false
  }


}
