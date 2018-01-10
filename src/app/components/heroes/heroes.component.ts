import {Component, OnInit} from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private _heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService) {
    console.log('Heroes Service Constructor!');
  }

  ngOnInit() {
    this._heroes = this._heroesService.getHeroes();
    console.log(this._heroes);
  }

}
