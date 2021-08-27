import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {   //It's a good place to put initialization logic.
    this.getHeroes();
  }
  heroes: Hero[] = [];
 // heroes = HEROES;
  selectedHero?: Hero;
  
  getHeroes() : void{ //get heroes from service
    this.heroes = this.heroService.getHeroes();
  }
  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  }


  //  hero : Hero = {
  //   id : 1,
  //   name: 'Windstorm'
  // };
  
}
