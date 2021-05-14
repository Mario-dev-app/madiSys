import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MatriculaComponent } from './matricula/matricula.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { HorarioComponent } from './horario/horario.component';
import { ReporteComponent } from './reporte/reporte.component';


const routes: Routes = [
  { path: '', component: MatriculaComponent},
  { path: 'alumno', component: AlumnoComponent},
  { path: 'horario', component: HorarioComponent},
  { path: 'reporte', component: ReporteComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/'}

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
