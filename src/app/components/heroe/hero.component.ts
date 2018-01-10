import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  hero: any = {};

  constructor(private _activatedRouter: ActivatedRoute, private _heroesService: HeroesService) {
    this._activatedRouter.params.subscribe(params => {
      this.hero = this._heroesService.getHero(params['id']);
    });
  }
}
