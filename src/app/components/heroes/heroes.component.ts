import {Component} from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Hero} from '../../interfaces/heroes.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  _heroes: Hero[] = [];
  _searchedHero = '';

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      this._searchedHero = params['searchedHero'];
      this._heroes = _heroesService.getHeroes(this._searchedHero);
    });
  }

  seeHeroProfile(idx: number) {
    this._router.navigate(['/hero/', idx]);
  }
}
