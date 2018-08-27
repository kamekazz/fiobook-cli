import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { AuthGuardService } from './auth-guard.service';
import { MessageComponent } from './message/message.component';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CliDeComponent } from './cli-de/cli-de.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { ClientProfielComponent } from './client-profiel/client-profiel.component';
import { TodosClientesComponent } from './todos-clientes/todos-clientes.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DebetCardComponent } from './debet-card/debet-card.component';
import { MissClienteComponent } from './miss-cliente/miss-cliente.component';
import { CliSergComponent } from './cli-serg/cli-serg.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatProgressSpinnerModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegistrationComponent,
    LoginComponent,
    DashbordComponent,
    ClienteComponent,
    CliDeComponent,
    ClientProfielComponent,
    TodosClientesComponent,
    DebetCardComponent,
    MissClienteComponent,
    CliSergComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),MatSlideToggleModule,
    FormsModule,MatTableModule,FlexLayoutModule,MatToolbarModule,MatListModule,MatIconModule,MatAutocompleteModule,MatProgressSpinnerModule,
    HttpClientModule,BrowserAnimationsModule,MatSidenavModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule

  ],
  providers: [RestApiService,DataService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
