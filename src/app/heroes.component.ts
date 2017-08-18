import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { Router } from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data => {
      setTimeout(() => this.heroes = data, 1000);
    });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
