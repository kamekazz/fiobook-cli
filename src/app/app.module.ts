import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { AuthGuardService } from './auth-guard.service';
import { MessageComponent } from './message/message.component';
import 'hammerjs';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CliDeComponent } from './cli-de/cli-de.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HistoryComponent } from './history/history.component';
import {MatTableModule} from '@angular/material/table';
import { ClientProfielComponent } from './client-profiel/client-profiel.component';
import { TodosClientesComponent } from './todos-clientes/todos-clientes.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DebetCardComponent } from './debet-card/debet-card.component';
import { MissClienteComponent } from './miss-cliente/miss-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegistrationComponent,
    LoginComponent,
    DashbordComponent,
    ClienteComponent,
    CliDeComponent,
    HistoryComponent,
    ClientProfielComponent,
    TodosClientesComponent,
    DebetCardComponent,
    MissClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,MatTableModule,FlexLayoutModule,
    HttpClientModule,BrowserAnimationsModule

  ],
  providers: [RestApiService,DataService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
