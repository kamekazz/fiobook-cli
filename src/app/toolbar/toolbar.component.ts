import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new  EventEmitter<void>()
  constructor(
    private router: Router,
    private data: DataService
  )  { }

  ngOnInit() {
  }

  get token() {
    return localStorage.getItem('token')
  }
}
