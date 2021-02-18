import { HeroesService } from './../../service/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {


  heroe: any = {}
  
  constructor( private activateRoute: ActivatedRoute, private _heroeService: HeroesService) { 
    this.activateRoute.params.subscribe( params =>{
      this.heroe = this._heroeService.getHeroe(params['id'])
      console.log(this.heroe)
    })
  }

  ngOnInit(): void {
  }

}
