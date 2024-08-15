import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';

  public counter: number = 10;

  increasyBy(): void {
    this.counter += 1;
  }

  decrementBy(): void {
    this.counter -= 1;
  }
  reset() {
    this.counter = 10;
  }
}
