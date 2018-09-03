import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recebos',
  templateUrl: './recebos.component.html',
  styleUrls: ['./recebos.component.scss']
})
export class RecebosComponent implements OnInit {
  @Input() public pagos
  constructor() { }

  ngOnInit() {
    
  }


}
