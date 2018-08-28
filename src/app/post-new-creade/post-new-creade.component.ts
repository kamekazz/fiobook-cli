import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-post-new-creade',
  templateUrl: './post-new-creade.component.html',
  styleUrls: ['./post-new-creade.component.scss']
})
export class PostNewCreadeComponent implements OnInit {
  ///form
  nota ='';
  cienteId=''
  capmax
  total
  btnDisabled = false
  cliteApodoSerch: string;
  cliente: any;
  depeiId

  clienteName
  cienteApodo

  constructor(
    @Inject(MAT_DIALOG_DATA) private passData:any,
    private data:DataService,
    private rest:RestApiService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.cienteId = this.passData.id.id
    this.clienteName = this.passData.id.name
    this.cienteApodo = this.passData.id.apodo
    this.cliteApodoSerch = this.cienteApodo + ' ' +this.clienteName
  }



  async oncretLine(){
    this.btnDisabled=true

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
        if (data['success'] ) {
          this.depeiId = data['id']
          this.router.navigate([`debet/${this.depeiId}`])
        } else {
          this.data.error(data['message'])
        }

    } catch (error) {
      this.data.error(error['message'])
    }
    this.btnDisabled= false
  }


  verifiyForm(){
    if (this.nota) {
      if (this.capmax) {
        return true
      } else {
        this.data.error('Porfavor Entre Climite de Creadito')
      }
    }else{
      this.data.error('Porfavor Entre Nota')
    }
  }
}
