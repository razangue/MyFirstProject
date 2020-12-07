import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionPersonneComponent } from './edition-personne.component';

describe('EditionPersonneComponent', () => {
  let component: EditionPersonneComponent;
  let fixture: ComponentFixture<EditionPersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionPersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
