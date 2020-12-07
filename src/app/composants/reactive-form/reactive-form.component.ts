import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  personnes: any = [];
  nomPattern = "^[A-Z][a-z]{2,10}";
  /*   personneForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', [Validators.required, Validators.pattern(this.nomPattern)]),
    prenom: new FormControl('', [Validators.required, this.checkPrenomValidator]),
  }); */
  personneForm = this.fb.group({
    id: [null],
    nom: ['doe'],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    adresse: this.fb.group({
      rue: [''],
      ville: [''],
      codePostal: ['']
    }),
    sports: this.fb.array([
      this.fb.control('')
    ])
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    /* this.personneForm.setValue(
  {
    id:1,
    nom:'Akenaton',
    prenom:'Romuald',
  }
) */
    this.personneForm.patchValue({
      prenom: 'abruzzi',
      adresse: {
        codePostal: '13000'
      }
    });
  }

  ajouterPersonne() {
    this.personnes.push({ ...this.personneForm.value });
  }
  afficherTout() {
    this.ajouterPersonne();
    console.log(this.personneForm.value);
  }

  checkPrenomValidator(control: FormControl) {
    const str: string = control.value;
    if (str[0] >= 'A' && str[0] <= 'Z') {
      return null;
    } else {
      return { erreur: 'Prenom non valide' };
    }
  }

  ajouterSport() {
    this.sports.push(this.fb.control(''));
  }

  get sports() {
    return this.personneForm.get('sports') as FormArray;
  }

  get nom() {
    return this.personneForm.get('nom');
  }
  get id() {
    return this.personneForm.get('id');
  }
  get prenom() {
    return this.personneForm.get('prenom');
  }
}
