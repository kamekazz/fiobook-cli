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
  cliente:any
  alldebet
  cliteApodoSerch
  ///form
  name = '';
  nota ='';
  cienteId=''
  capmax
  total
  btnDisabled = false

  myReview= {
    description:'',
    rating: 0
  }
  viewRivieBtn = false
  linadeCreditoFormVies = false
  addRivieBtn = false;

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
      this.rest.get(`https://colbook.herokuapp.com/api/cliente/${res['id']}`)
      .then((data) => {
        data['success']
          ? (this.cliente = data['data']).then(
            this.alldebet = this.cliente.deudaId
          )
          : this.router.navigate(['/'])
      }).catch((err) => {
        this.data.error(err['message'])
      });
    })
  }

  async postReview(){
    this.btnDisabled= true
    try {
      const data = await this.rest.post(
        'api/review/new',
        {
          cienteId: this.cliente._id,
          nota: this.myReview.description,
          star: this.myReview.rating,
        }
      );
      data['success']
        ? this.data.success(data['message'])
        : this.data.error(data['message'])
    } catch (error) {
      this.data.error(error['message'])
    }
    this.getProfiel()
    this.onClickAddbtn()
    this.myReview= {
      description:'',
      rating: 0
    }
    window.scrollTo(0, 0)
    this.btnDisabled= false

  }


  newLiniadeCreditoV1(){
    this.linadeCreditoFormVies = true
    this.cienteId = this.cliente._id
    this.cliteApodoSerch = this.cliente.name +' '+ this.cliente.apodo 
  }

  onClickAddbtnviewRivieBtn(){
    this.viewRivieBtn = !this.viewRivieBtn
  }

  async oncretLine(){
    this.btnDisabled=true
    this.linadeCreditoFormVies = true
    try {
      const data = await this.rest.post(
        'https://colbook.herokuapp.com/api/debet/new',
        {
          name: this.cliteApodoSerch,
          nota: this.nota,
          ciId: this.cienteId,
          capmax: this.capmax,
          total: this.total
        }
      )
      data['success'] 
      ? (this.data.success(data['message']) )
      :this.data.error(data['message'])
      
    } catch (error) {
      this.data.error(error['message'])
    }
    this.btnDisabled= false
    this.linadeCreditoFormVies = false
  }

  onClickAddbtn(){
    this.addRivieBtn = !this.addRivieBtn
  }
}
