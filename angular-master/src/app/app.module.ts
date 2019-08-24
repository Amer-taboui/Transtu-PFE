import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ligneListComponent } from './ligne/liste-ligne/liste-ligne.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateligneComponent } from './ligne/add-ligne/add-ligne.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { StationsComponent } from './stations/stations.component';
import { EditLigneComponent } from './ligne/edit-ligne/edit-ligne.component';



@NgModule({
  declarations: [
    AppComponent,
    
    CreateligneComponent,
    ligneListComponent,
    
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    TarifsComponent,
    StationsComponent,
    EditLigneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
