import { Component, OnInit } from '@angular/core';
import { ServiceHeroes } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroe.interfaces';

@Component({
  selector: 'heroes-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor( private serviceHeroes: ServiceHeroes) { }
    
  ngOnInit(): void {
    this.serviceHeroes.getHeroes()
      .subscribe( heroes => this.heroes = heroes );
  }

}
