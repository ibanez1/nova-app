import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  hero: Hero = {name: 'Windstorm', id: 1};

  @Input() heroes: undefined | Array<Hero>;
  selectedHero: Hero | undefined;
  @Output() outHero: EventEmitter<Hero> = new EventEmitter();
  @Input() type = '';
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(this);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.outHero.emit(hero);
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

}
