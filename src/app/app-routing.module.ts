import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientProfielComponent } from './client-profiel/client-profiel.component';

const routes: Routes = [
  {path:'',component:DashbordComponent},
  {path:'cliente',component:ClienteComponent},
  {path:'clienteid/:id',component:ClientProfielComponent},

  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:DashbordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
