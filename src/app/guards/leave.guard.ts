import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdresseComponent } from 'src/app/composants/adresse/adresse.component';
import { FormulaireComponent } from 'src/app/composants/formulaire/formulaire.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<FormulaireComponent> {
  canDeactivate(component: FormulaireComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    return component.personne.nom === undefined ||
    component.personne.prenom === undefined ||
    component.personne.nom.length === 0 ||
    component.personne.prenom.length === 0 ||
    confirm('voulez-vous vraiement quitter ?');
    }
  
}
