import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {clear, countSelector, decrease, increase} from "./reducers/counter";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public updatedAt?: number;
  public count$ = this.store.select(countSelector)
  public cannotDecrease$ = this.count$.pipe(map(count => count <= 0));

  constructor(private store: Store) {
  }

  increase(): void {
    this.store.dispatch(increase());
    this.updatedAt = Date.now();
  }

  decrease(): void {
    this.store.dispatch(decrease());
    this.updatedAt = Date.now();
  }

  clear(): void {
    this.store.dispatch(clear());
    this.updatedAt = Date.now();
  }
}
