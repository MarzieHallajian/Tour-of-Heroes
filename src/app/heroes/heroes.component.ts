import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService,
    private messageService: MessageService) {}
  ngOnInit(): void {   //It's a good place to put initialization logic.
    this.getHeroes();
  }
  heroes: Hero[] = [];
 // heroes = HEROES;
  selectedHero?: Hero;
  
  getHeroes() : void{ //get heroes from service
  //  this.heroes = this.heroService.getHeroes();  //without observabe
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  // The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  }
  onSelect(hero : Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`);
    
  }


  //  hero : Hero = {
  //   id : 1,
  //   name: 'Windstorm'
  // };
  
}
