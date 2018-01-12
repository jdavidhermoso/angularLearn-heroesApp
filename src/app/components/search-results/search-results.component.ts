import {Component, OnInit} from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Hero} from '../../interfaces/heroes.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  private heroes: Hero[];
  private _searchedHero: string;

  constructor(private _activatedRoute: ActivatedRoute, private heroesService: HeroesService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      this._searchedHero = params['searchedHero'];
    });
  }

  ngOnInit() {
    this.heroes = this.heroesService.searchHeroes(this._searchedHero);
    console.log(this.heroes);
  }

}
