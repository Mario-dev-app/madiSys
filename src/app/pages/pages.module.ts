import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from './../shared/shared.module';
import { AlumnoComponent } from './alumno/alumno.component';
import { HorarioComponent } from './horario/horario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { MatriculaComponent } from './matricula/matricula.component';



@NgModule({
  declarations: [
    PagesComponent,
    AlumnoComponent,
    HorarioComponent,
    ReporteComponent,
    MatriculaComponent
  ],
  imports: [
  CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
