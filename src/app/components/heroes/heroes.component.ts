import {Component} from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Hero} from '../../interfaces/heroes.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  private _heroes: Hero[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) {
    this._heroes = _heroesService.getHeroes();
  }

  seeHeroProfile(idx: number) {
    this._router.navigate(['/hero/', idx]);
  }
}
