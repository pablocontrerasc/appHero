import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
    
  }
  buscarHeroe( termino: string){
    console.log(termino)
  


  }

}
