import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormFieldValidationErrorsPipe } from './pipes/form-validation-errorText.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';


const MaterialApi = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule
]

@NgModule({
  declarations: [
    FormFieldValidationErrorsPipe
  ],
  imports: [
    ...MaterialApi,
    CommonModule
  ],
  exports: [
    ...MaterialApi,
    FormFieldValidationErrorsPipe
    
  ]
})
export class SharedModule { }
