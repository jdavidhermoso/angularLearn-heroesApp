import {Component, OnInit} from '@angular/core';
import {HeroesService} from '../../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  searchHero(wordSearched: string) {
    this._router.navigate(['/heroes', wordSearched]);
  }
}
