import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';
import {Hero} from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() hero: Hero;

  constructor(private _activatedRouter: ActivatedRoute, private _heroesService: HeroesService, private _router: Router) {
    console.log('aaa');
    // this._activatedRouter.params.subscribe(params => {
    //   this.hero = this._heroesService.getHero(params['id']);
    // });
  }

  getBackToHeroes() {
    this._router.navigate(['/heroes/']);
  }
}
