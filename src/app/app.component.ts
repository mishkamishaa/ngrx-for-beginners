import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter = 0;
  public updatedAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.updatedAt = Date.now();
    this.counter++;
  }

  decrease(): void {
    this.updatedAt = Date.now();
    this.counter--;
  }

  clear(): void {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
