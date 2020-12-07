import { Component, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren, ContentChild } from '@angular/core';
import { FilsComponent } from 'src/app/composants/fils/fils.component';
import { TitreComponent } from 'src/app/composants/titre/titre.component';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit, AfterViewInit {

  tab: Array<string> = ['premier', 'deuxieme', 'troisieme'];
  nord = '’Lille';
  sud = 'Marseille';
  capitale = 'Paris';
  // @ViewChild(FilsComponent, {static:false}) fils: FilsComponent;
  // @ViewChildren(FilsComponent) fils: QueryList<FilsComponent>;
  @ContentChild(TitreComponent, { static: false }) titre: TitreComponent;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.titre.valeur);
  }

}
