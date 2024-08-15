import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: String[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
  public deleteHero?: String;

  removeLastHero(): void {
  this.deleteHero = this.heroNames.pop();

  }

}
