import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientProfielComponent } from './client-profiel/client-profiel.component';
import { DebetCardComponent } from './debet-card/debet-card.component';
import { AuthGuardService } from './auth-guard.service';
import { CliSergComponent } from './cli-serg/cli-serg.component';

const routes: Routes = [
  {path:'',component:DashbordComponent,canActivate:[AuthGuardService]},
  {path:'cliente',component:ClienteComponent,canActivate:[AuthGuardService]},
  {path:'clienteid/:id',component:ClientProfielComponent,canActivate:[AuthGuardService]},
  {path:'debet/:id',component:DebetCardComponent,canActivate:[AuthGuardService]},
  {path:'xregisterx',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'clientserch',component:CliSergComponent,canActivate:[AuthGuardService]},
  {path:'**',redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
