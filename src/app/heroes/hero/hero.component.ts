import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public capitalizado: string = 'capitalizado';

  mostrar(): void {
    console.log('Mensaje de metodo');

  }
  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }
  
  changeHero(): String {
    return this.name='Spiderman';
  }

  changeAge(): number {
    return this.age=35;
  }

  resetForm(): void {
    this.age=45;
    this.name='ironman';
  }
  
}
