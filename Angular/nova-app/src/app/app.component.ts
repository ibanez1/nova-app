import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`body {
    margin: 2em;
  }`],
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroesssssss';
  selectedHero: Hero | undefined;

  typeHeroes = 'Marvel';

  // heroes = HEROES;
  heroes: Hero[] = [];
  newHeroes: Array<Hero> = [];

  constructor(private heroService: HeroService) { }

    ngOnInit(): void {
    console.log(this);
    this.getHeroes();
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

  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(reponse => {
        console.log('HEROESSSSSSSSSSSSSSSS:', reponse);
        this.heroes = reponse.losNuevosHeroes;
      });
}
}
