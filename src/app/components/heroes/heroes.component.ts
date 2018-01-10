import {Component, OnInit} from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../interfaces/heroes.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private _heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) {
    console.log('Heroes Service Constructor!');
  }

  ngOnInit() {
    this._heroes = this._heroesService.getHeroes();
    console.log(this._heroes);
  }

  seeHeroProfile(idx: number) {
    this._router.navigate(['/hero/', idx]);
  }
}
