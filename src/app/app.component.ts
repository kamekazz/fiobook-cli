import { Component } from '@angular/core';

import { DataService } from './data.service';
import { SwUpdate } from '@angular/service-worker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm = ''
  isCollpased = true;
  navbarOpen = false;

  update: boolean = false
  constructor(
    private data: DataService,
    
  ) {
    this.data.getProfile()

  }

  





  // search(){
  //   if (this.searchTerm) {
  //     this.collapse()
  //     this.router.navigate(['search',{query: this.searchTerm}])
  //   }
  // }




}