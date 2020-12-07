import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './composants/index/index.component';
import { AdresseComponent } from 'src/app/composants/adresse/adresse.component';
import { StagiaireComponent } from 'src/app/composants/stagiaire/stagiaire.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { ReactiveFormComponent } from './composants/reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonneComponent } from './composants/personne/personne.component';
import { PersonneService } from 'src/app/services/personne.service';
import { VehiculeModule } from 'src/app/modules/vehicule/vehicule.module';
import { EditionPersonneComponent } from './composants/personne/edition-personne/edition-personne.component';
import { PereComponent } from './composants/pere/pere.component';
import { FilsComponent } from './composants/fils/fils.component';
import { TitreComponent } from './composants/titre/titre.component';
import { ParentComponent } from './composants/parent/parent.component';
import { ChildComponent } from './composants/child/child.component';
import { AuthComponent } from './composants/auth/auth.component';
import { ObservableComponent } from './composants/observable/observable.component';


@NgModule({
  declarations: [
    AppComponent,
    AdresseComponent,
    StagiaireComponent,
    IndexComponent,
    FormulaireComponent,
    CalculetteComponent,
    ReactiveFormComponent,
    PersonneComponent,
    EditionPersonneComponent,
    PereComponent,
    FilsComponent,
    TitreComponent,
    ParentComponent,
    ChildComponent,
    AuthComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    VehiculeModule, 
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
