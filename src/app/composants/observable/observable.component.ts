import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, of, merge } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { from } from 'rxjs/internal/observable/from';
import { Subscription } from 'rxjs/internal/Subscription';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  status = '';
  tab: Array<any> = [];
  subscription: Subscription;
  constructor() { }

  /* Synchrone
  ngOnInit() {
    const tableau = [1, 2, 3];
    const observable: Observable<any> = from(tableau);
    observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'fini';
      }
    );
  }*/
  // Assynchrone
  ngOnInit() {
    const observable: Observable<number> = timer(3000, 1000);
    this.subscription = observable.subscribe(
      (value) => { this.tab.push(value); },
      (error) => { this.status = error; },
      () => { this.status = 'fini'; }
    );
  }
  ngOnDestroy() { this.subscription.unsubscribe(); }
}
