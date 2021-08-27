import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root' //When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it.
})
export class HeroService {

  constructor() { }
   
  getHeroes() : Hero[]{
    return HEROES;
  }

}