import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import {MatDialog,} from '@angular/material';
import { PostNewCreadeComponent } from '../post-new-creade/post-new-creade.component';

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
  checked = false;
  btnDisabled = false


  constructor(
    private router: Router,
    private data: DataService,
    private rest: RestApiService,
    private dialog: MatDialog

  ) { }

  ngOnInit() {
  }

  validate(){
    if (this.name) {
      if (this.apodo) {
        if (this.veryPhone()) {
          return true
        } else {
          this.data.error('Porfavor Ingrese el Numero de Telefono Correcto')
        }
      }else{
        this.data.error('Porfavor Ingrese Apodo')
      }
    } else {
      this.data.error('El Nombre No Esta Ingresado')
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
          this.params1 = data['cliente']
          this.dialog.open(PostNewCreadeComponent,{
            data:{
              id: this.params1
            }
          })
          this.data.error('')
        } else {
          this.data.error(data['message'])
        }
      }
    } catch(error){
      this.data.error(error['message'])
    }
    this.btnDisabled = false
  }

  changed(){
    this.checked = !this.checked
  }

  veryPhone(){
    if (this.cedula.toString().length >= 9 &&  this.cedula.toString().length <= 10 ) {
      return true
    }
  }

}
