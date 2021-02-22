import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Hero } from '../hero.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero: Hero | undefined;
  hero: Hero = {
    id: 1,
    name: 'HERO DETAIL'
  };
  idFromParams: string;

  @Output() emitNewHero: EventEmitter<Hero> = new EventEmitter();
  constructor(private route: ActivatedRoute) { }

  newHero: Hero = {
    name: '',
    id: 0
  };
  ngOnInit(): void {
    this.idFromParams = this.route.snapshot.paramMap.get('id');
  }


  setNewHero(): void {
    this.emitNewHero.emit(this.newHero);
  }

}
