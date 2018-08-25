import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  search:any
  resultOfSerch:any
  btnDisabled = false

  constructor(
    private data:DataService,
    private rest:RestApiService,
  ) { }

  ngOnInit() {
  }

  async onserch(){
    this.btnDisabled=true
    try {
      const data = await this.rest.get(
        `http://127.0.0.1:3030/api/extre/?search=${this.search}`
      )
      if (data['success']) {
        this.resultOfSerch = data['data']
        this.data.success(data['message'])
      } else {
        this.data.error(data['message'])
      }
    } catch (error) {
      this.data.error(error['message'])
    }
  }
}
