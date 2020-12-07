import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  personnes: Array<Personne> = [];
  personne: Personne = {};

  constructor() { }

  ngOnInit(): void {
  }
  ajouterPersonne() {
    this.personnes.unshift({ ...this.personne });
    this.personne.nom = '';
    this.personne.prenom = '';
    console.log(this.personnes);
  }

  supprimerPersonne(personne: Personne) {
    const index: number = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }

}
