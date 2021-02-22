import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor( private activateroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateroute.params.subscribe( params =>{
      
    })
  }

}
