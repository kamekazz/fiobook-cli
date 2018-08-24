import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cli-serg',
  templateUrl: './cli-serg.component.html',
  styleUrls: ['./cli-serg.component.scss']
})
export class CliSergComponent implements OnInit {

  constructor(
    private data:DataService,
    private rest:RestApiService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

}
