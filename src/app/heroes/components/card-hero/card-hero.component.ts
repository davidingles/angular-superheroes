import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroe.interfaces';

@Component({
  selector: 'heroes-card-hero',
  templateUrl: './card-hero.component.html',
  styles: [
  ]
})
export class CardHeroComponent implements OnInit{

  @Input()
  public herooo!: Hero;

  

  ngOnInit(): void {
    if ( !this.herooo ) {
      throw new Error('Hero not found');
    }
  }

}
