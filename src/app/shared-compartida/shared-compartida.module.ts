import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { ReactiveFormsModule } from '@angular/forms';
//para utilizar ngsubmit se debe importarn http
import { HttpClientModule } from '@angular/common/http';

//angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class SharedCompartidaModule { }
