import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-client-profiel',
  templateUrl: './client-profiel.component.html',
  styleUrls: ['./client-profiel.component.scss']
})
export class ClientProfielComponent implements OnInit {
  cliente
  ewArr = [];
  
  ///form
  name = '';
  nota ='';
  cienteId=''
  capmax
  total
  btnDisabled = false

  fiarFormVies = false
  pagarFormVies = false
  linadeCreditoFormVies = false

  constructor(
    private data:DataService,
    private activatetedRoyte:ActivatedRoute,
    private rest:RestApiService,
    private router:Router,

  ) { }

  ngOnInit() {
    this.getProfiel()
    
  }

  getProfiel(){
    this.activatetedRoyte.params.subscribe(res =>{
      this.rest.get(`http://127.0.0.1:3030/api/cliente/${res['id']}`)
      .then((data) => {
        data['success']
          ? (this.cliente = data['data'])
          : this.router.navigate(['/'])
      }).catch((err) => {
        this.data.error(err['message'])
      });
    })
  }

  // ckIfDef(){
  //   let fiadorId = this.data.user._id
  //   let array = this.cliente.deudaId
  
  //   var newArr = array.filter(function(item){
  //     return item._id === fiadorId;
   
  // });

  //   console.log("Filter results:",newArr);
  

  // }

  newLiniadeCreditoV1(){
    this.linadeCreditoFormVies = true
    this.cienteId = this.cliente._id
    console.log(this.cienteId);
  }

  async oncretLine(){
    this.btnDisabled=true
    try {
      const data = await this.rest.post(
        'http://127.0.0.1:3030/api/debet/new',
        {
          name: this.name,
          nota: this.nota,
          clienteId: this.cienteId,
          capmax: this.capmax,
          total: this.total
        }
      )
      if (data['success']) {
        this.data.success(data['message'])
      } else {
        this.data.error(data['message'])
      }
    } catch (error) {
      console.log(error);
    }
    this.btnDisabled= false
    this.linadeCreditoFormVies = false
  }

}
