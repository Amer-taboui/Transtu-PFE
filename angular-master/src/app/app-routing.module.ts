import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ligneListComponent } from './ligne/liste-ligne/liste-ligne.component';
import { CreateligneComponent } from './ligne/add-ligne/add-ligne.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { TarifsComponent } from './tarifs/tarifs.component';
import { StationsComponent } from './stations/stations.component';
import { EditLigneComponent } from './ligne/edit-ligne/edit-ligne.component';

const routes: Routes = [
  { path: '', component: ligneListComponent ,canActivate:[AuthGaurdService] },
  { path: 'addligne', component: CreateligneComponent,canActivate:[AuthGaurdService]},
  { path: 'editligne/:id'   , component: EditLigneComponent,canActivate:[AuthGaurdService] },
  { path: 'login'   , component: LoginComponent },
  { path: 'logout'  , component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: "tarifs"  , component: TarifsComponent },
  { path: "stations", component: StationsComponent },
 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
