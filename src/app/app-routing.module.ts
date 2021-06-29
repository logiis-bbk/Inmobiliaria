import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaInmueblesComponent } from './consulta-inmuebles/consulta-inmuebles.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'consulta', component: ConsultaInmueblesComponent },
  { path: '', redirectTo: 'consulta', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'consulta', pathMatch: 'full' }

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
