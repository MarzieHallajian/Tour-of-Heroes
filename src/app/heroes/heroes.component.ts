import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {   //It's a good place to put initialization logic.
  }
  heroes = HEROES;
  selectedHero?: Hero;
  
  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  }


  //  hero : Hero = {
  //   id : 1,
  //   name: 'Windstorm'
  // };
  
}
