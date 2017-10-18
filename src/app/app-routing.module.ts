import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sanjose' },
  { path: 'burbank', pathMatch: 'full', component: BurbankComponent },
  { path: 'chicago', pathMatch: 'full', component: ChicagoComponent },
  { path: 'dallas', pathMatch: 'full', component: DallasComponent },
  { path: 'dc', pathMatch: 'full', component: DcComponent },
  { path: 'sanjose', pathMatch: 'full', component: SanjoseComponent },
  { path: 'seattle', pathMatch: 'full', component: SeattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
