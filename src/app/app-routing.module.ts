import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { StagiaireComponent } from 'src/app/composants/stagiaire/stagiaire.component';
import { AdresseComponent } from 'src/app/composants/adresse/adresse.component';
import { IndexComponent } from 'src/app/composants/index/index.component';
import { FormulaireComponent } from 'src/app/composants/formulaire/formulaire.component';
import { ReactiveFormComponent } from 'src/app/composants/reactive-form/reactive-form.component';
import { PersonneComponent } from 'src/app/composants/personne/personne.component';
import { VEHICULE_ROUTES } from 'src/app/modules/vehicule/vehicule-routing.module';
import { EditionPersonneComponent } from 'src/app/composants/personne/edition-personne/edition-personne.component';
import { PereComponent } from 'src/app/composants/pere/pere.component';
import { FilsComponent } from 'src/app/composants/fils/fils.component';
import { ParentComponent } from 'src/app/composants/parent/parent.component';
import { AuthComponent } from 'src/app/composants/auth/auth.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LeaveGuard } from 'src/app/guards/leave.guard';
import { ObservableComponent } from 'src/app/composants/observable/observable.component';


const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'index', component: IndexComponent},
  {path:'adresse', component: AdresseComponent, canActivate: [AuthGuard]},
  {path:'stagiaire/:param1/:param2', component: StagiaireComponent},
  {path:'formulaire', component: FormulaireComponent, canActivate: [AuthGuard], canDeactivate: [LeaveGuard]},
  {path:'reactive-form', component: ReactiveFormComponent},
  {path:'personne', component: PersonneComponent},
  {path:'personne/:id/:showDetail', component: EditionPersonneComponent},
  {path:'vehicule', children: VEHICULE_ROUTES  },
  {path:'pere', component: PereComponent  },
  {path:'fils', component: FilsComponent  },
  {path:'parent', component: ParentComponent  },
  {path:'auth', component: AuthComponent  },
  {path:'observable', component: ObservableComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
