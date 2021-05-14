import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
