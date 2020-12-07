import { Component, OnInit, Input } from '@angular/core';
import { PersonneService } from 'src/app/services/personne.service';
import { Personne } from 'src/app/interfaces/personne';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edition-personne',
  templateUrl: './edition-personne.component.html',
  styleUrls: ['./edition-personne.component.css']
})
export class EditionPersonneComponent implements OnInit {

  personneId: number;
  routeData: any;
  personne: Personne;
  showDetail: boolean;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: PersonneService) {
    this.routeData = this.activatedRoute.data.subscribe(data => {
      this.showDetail = data.showDetail;
    });
  }

  ngOnInit(): void {
    this.personneId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.showDetail = (this.activatedRoute.snapshot.paramMap.get('showDetail') === 'true');
    if (this.personne == null) {
      this.service.getById(this.personneId).subscribe(res => {
        this.personne = res;
      });
    }
  }

  updatePersonne() {
    this.service.updatePersonne(this.personne);
    const personneDetailRouteLink = 'personne/';
    this.router.navigate([personneDetailRouteLink], {
      queryParams: {}
    });
  }
}
