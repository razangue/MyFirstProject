import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent implements OnInit {
@Input() valeur: string;
@Input() couleur: string;
  constructor() { }

  ngOnInit(): void {
  }

}
