import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit, OnChanges {
  @Input() ordre: string;
  @Input() villeNaissance: string;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (const key of Object.keys(changes)) {
    console.log(key);
    const obj = changes[key];
    for (const cle of Object.keys(obj)) {
    console.log(cle, obj[cle]);
    }
    }
    }

}
