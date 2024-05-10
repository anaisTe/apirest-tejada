import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutes } from './layout.routing';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    LayoutComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
