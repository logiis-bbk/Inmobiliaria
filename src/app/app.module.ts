/*
  _                   ,  ,    ___  
 | |                 (_)(_) (  __ |              
 | |      _       __  |  |   \ \ \|          
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


//angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

//Componentes
import { LoginComponent } from './login/login.component';
import { HeadboardComponent } from './headboard/headboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
