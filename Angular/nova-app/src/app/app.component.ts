import { Component } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`body {
    margin: 2em;
  }`],
})
export class AppComponent {
  title = 'Tour of Heroesssssss';
  selectedHero: Hero | undefined;

  typeHeroes = 'Marvel';

  // heroes = HEROES;
  heroes: Hero[] = []
  newHeroes: Array<Hero> = [];

  constructor() { }

    ngOnInit(): void {
    console.log(this);
  }

  setHero(event: Hero): void{
    this.selectedHero = event;
  }

  changeHero(): void {
    this.typeHeroes = this.typeHeroes === 'Marvel' ? 'DC' : 'Marvel';
  }

  setNewHeroInList(newHeroFather: Hero): void{
    this.newHeroes.push({id: newHeroFather.id, name: newHeroFather.name});
  }

//     getHeroes(): void {
//   this.heroService.getHeroes()
//       .subscribe(heroes => this.heroes = heroes);
// }
}
