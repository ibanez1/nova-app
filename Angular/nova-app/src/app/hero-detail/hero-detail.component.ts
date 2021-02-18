import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Hero } from '../hero.model';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero | undefined;
  @Output() emitNewHero: EventEmitter<Hero> = new EventEmitter();
  constructor() { }

  newHero: Hero = {
    name: '',
    id: 0
  };
  ngOnInit(): void {}


  setNewHero(): void {
    this.emitNewHero.emit(this.newHero);
  }

}
