import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
// import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
    this.activateRoute.params.subscribe(params => {
      this.heroe = heroe._heroeService.getHeroe(params['id']);
    });
  }

  ngOnInit() {}
}
