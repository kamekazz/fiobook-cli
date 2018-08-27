import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  params1=''
  name = ''
  apodo = ''
  cedula =''
  newClient = false

  btnDisabled = false

  constructor(
    private router: Router,
    private data: DataService,
    private rest: RestApiService
  ) { }

  ngOnInit() {
  }

  validate(){
    if (this.name) {
      if (this.apodo) {
        if (this.cedula) {
          return true
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
          'https://colbook.herokuapp.com/api/cliente/old/name',
          {
            name: this.name,
            apodo: this.apodo,
            cedula: this.cedula,
          }
        )
        if (data['success']) {
          this.data.success(data['message'])
          this.params1 = data['cliente']
          this.router.navigate([`clienteid/${this.params1}`])

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
