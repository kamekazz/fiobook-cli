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
import {MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatProgressSpinnerModule, MatSlideToggleModule, MatDialogModule, MatTabsModule, MatProgressBarModule, MatChipsModule} from '@angular/material';
import { PostNewCreadeComponent } from './post-new-creade/post-new-creade.component';
import { PagosComponent } from './debet-card/pagos/pagos.component';
import { FioComponent } from './debet-card/fio/fio.component';
import { EditMaxCreditComponent } from './debet-card/edit-max-credit/edit-max-credit.component';
import { RecebosComponent } from './recebos/recebos.component';
import { ReceboDetalleComponent } from './recebos/recebo-detalle/recebo-detalle.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegistrationComponent,
    LoginComponent,
    DashbordComponent,
    ClienteComponent,
    ClientProfielComponent,
    TodosClientesComponent,
    DebetCardComponent,
    MissClienteComponent,
    CliSergComponent,
    SidenavComponent,
    ToolbarComponent,
    PostNewCreadeComponent,
    PagosComponent,
    FioComponent,
    EditMaxCreditComponent,
    RecebosComponent,
    ReceboDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatChipsModule,
    NgbModule.forRoot(),MatSlideToggleModule,MatDialogModule,MatProgressBarModule,MatTableModule,
    FormsModule,MatTableModule,FlexLayoutModule,MatToolbarModule,MatListModule,MatIconModule,MatAutocompleteModule,MatProgressSpinnerModule,MatTabsModule,
    HttpClientModule,BrowserAnimationsModule,MatSidenavModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [RestApiService,DataService,AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents:[PostNewCreadeComponent,PagosComponent,FioComponent,EditMaxCreditComponent]
})
export class AppModule { }
