import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Formation-angular';
  personne: Personne = new Personne(32, 'Romuald', 'Milos');
  tab: number[] = [2, 3, 5, 8];

  personnes: any[] = [
    new Personne(100, 'Wick', 'John'),
    new Personne(101, 'Abruzzi', 'John'),
    new Personne(102, 'Marley', 'Bob'),
    new Personne(103, 'Segal', 'Steven')
    ];

  nom = 'Romeo';
  couleur = 'blue';

  direBonjour(){
    return 'Bonjour à tous';
  }

  getColor (){
    return 'white';
  }

  getBackgroundColor(){
    return 'red';
  }

}
