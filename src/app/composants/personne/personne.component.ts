import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/services/personne.service';
import { Personne } from 'src/app/interfaces/personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personnes: Personne[] = [];
  constructor(private router: Router, private personneService: PersonneService) { }
  personne: Personne = {};
  showDetail: boolean;

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.personneService.getAll().subscribe(res => {
      this.personnes = res;
    });
  }

  ajouterPersonne() {
    this.personneService.addPerson(this.personne).subscribe(res => {
      this.reloadData();
    });

  }

  supprimerPersonne(id: number) {
    this.personneService.deletePerson(id)
      .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  showPersonneDetails(item: Personne) {
    this.showDetail = false;
    const personneDetailRouteLink = 'personne/' + item.id+'/'+this.showDetail;
    this.router.navigate([personneDetailRouteLink], {
      queryParams: { }
    });
  }

  editerPersonne(item: Personne) {
    this.showDetail = true;
    const personneDetailRouteLink = 'personne/' + item.id+'/'+this.showDetail;
    this.router.navigate([personneDetailRouteLink], {
      queryParams: { }
    });
  }
}
