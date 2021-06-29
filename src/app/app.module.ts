/*
  _                   ,  ,    ___  
 | |                 (_)(_) (  __ |              
 | |      _       __  |  |   \ \             
 | |   :/ _ \  :/ _ \| | | :  \ \        
 | |   | | | | | |_| | || ||\__\ \       
 | |___| |_| |  \__  |_||_||____,_)      
 |____/ \___/ , __| |              
                | _ /                                   
                      
  Desarrollado por Logi is  
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Componentes
import { LoginComponent } from './login/login.component';
import { HeadboardComponent } from './headboard/headboard.component';
import { SharedCompartidaModule } from './shared-compartida/shared-compartida.module';
import { AppRoutingModule } from './app-routing.module';
import { ConsultaInmueblesComponent } from './consulta-inmuebles/consulta-inmuebles.component';




@NgModule({
  declarations: [
    AppComponent,
    HeadboardComponent,
    LoginComponent,
    ConsultaInmueblesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedCompartidaModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
