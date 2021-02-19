import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {
  // const heroes = of(HEROES);
  // return heroes;
  return this.http.get('http://demo1696719.mockable.io/');
}




  // getHeroes(): Observable<any> {
  
  // return this.http.get('http://demo1696719.mockable.io/');
  //   const heroes = of([
  // { "id": 11, "name": "Dr Nice" }]);
  // return heroes;
// }
}
