import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoitureComponent } from 'src/app/src/app/modules/vehicule/voiture/voiture.component';
import { CamionComponent } from 'src/app/modules/vehicule/camion/camion.component';


export const VEHICULE_ROUTES: Routes = [
  {   path:'camion', component: CamionComponent },
  {   path:'voiture', component: VoitureComponent },
  {   path:'', component: VoitureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(VEHICULE_ROUTES)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }
