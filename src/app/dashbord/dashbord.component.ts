import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  search:any
  resultOfSerch:any
  btnDisabled = false
  allClientesSerchOn:any
  newArray
  newArray1
  
  bucadorBoton=false


  constructor(
    private data:DataService,
    private rest:RestApiService,
  ) { }

  ngOnInit() {
    this.getmisCliente()
  }

  async onserch(){
    this.btnDisabled=true
    try {
      const data = await this.rest.get(
        `https://colbook.herokuapp.com/api/extre/?search=${this.search}`
      )
      if (data['success']) {
        this.resultOfSerch = data['data']
        this.bucadorBoton = true
        this.data.error('')
      } else {
        this.data.error(data['message'])
      }
    } catch (error) {
      this.data.error(error['message'])
    }
  }

  onClickSerch(){
    this.onserch()
    this.search = ''
  }

  async getmisCliente(){
    try {
      const data = await this.rest.get(
        `https://colbook.herokuapp.com/api/extre/todosnomebreyapodo`
      )
      if (data['success']) {
        this.allClientesSerchOn = data['data']
        // this.separator()
        
      } else {
        this.data.error('Could not ferch allClientes..')
      }
    } catch (error) {
      this.data.error(error['message'])
    }
  }


  separator(){
    for (let index = 0; index < this.allClientesSerchOn.length; index++) {
      this.newArray1 += ''
      this.newArray1 +=  this.allClientesSerchOn[index]['name']
    }
    console.log(this.newArray1);
    var result= this.newArray1.split(" "); 
    this.newArray = result
    console.log(this.newArray);
  }

  botoParaTras(){
    this.bucadorBoton = !this.bucadorBoton
  }
  


  


  
}
