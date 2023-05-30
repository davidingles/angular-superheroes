import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/heroe.interfaces';
import { ServiceHeroes } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public heroSelected: Hero | undefined;

  constructor( private heroesServicio: ServiceHeroes) { }

  searchHero(){
    const value: string = this.searchInput.value?.trim() || '';
    console.log({value});

    this.heroesServicio.getSuggestions(value) 
      .subscribe( heroes => this.heroes = heroes);
  }

  selectedHero( event: MatAutocompleteSelectedEvent ){
    if(!event.option.value){
      this.heroSelected = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);

    this.heroSelected = hero;
  }

}
