import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  hero: Hero = {name: 'Windstorm', id: 1};

  heroes: undefined | Array<Hero>;
  selectedHero: Hero | undefined;
  // @Output() outHero: EventEmitter<Hero> = new EventEmitter();
  // @Input() type = '';
  constructor(private heroService: HeroService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(this);
    this.getHeroes();

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // this.outHero.emit(hero);
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

}
