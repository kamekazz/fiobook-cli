import { Component, OnInit, NgZone, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MatSidenav } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

const SMALL_WIDTH_BREAKPOINT = 720

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  rutasArray=[
    {name:'Tablero',logo:'dvr',ruta:'/'},
    {name:'Ingersar Nuevo Cliente',logo:'person_add',ruta:'/cliente'},
  ]
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`)

  constructor(zone: NgZone,
    private router: Router,
    private data: DataService,
    private swUpdate: SwUpdate
  ) {
    this.mediaMatcher.addListener(mql => zone.run(()=>  this.mediaMatcher = mql))
   }

  @ViewChild(MatSidenav) sidenav: MatSidenav

  ngOnInit() {
    this.router.events.subscribe(()=>{
      if (this.isScreenSmall()) {
        this.sidenav.close()
      }
    })

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

          if(confirm("New version available. Load New Version?")) {

              window.location.reload();
          }
      });
  }        
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches
  }

  get token() {
    return localStorage.getItem('token')
  }

  logout(){
    this.data.user ={}
    localStorage.clear();
    this.router.navigate(['login'])
  }

  logoMove(){
    console.log(`hola`);
  }



}
