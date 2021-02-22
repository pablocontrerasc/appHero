import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre: string = 'Linterna Verde';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.125;
  salario: number = 1234.5;

  persona = {
    nombre: 'Pepe',
    clave: 'super Pepe',
    vivienda: {
      Calle: 'calle nueva',
      numero: 12345
    }
  }

  valorPromesa = new Promise((resolve)=>{
    setTimeout(() => {
      resolve('llego la informacion')
    }, 4500)
  });

fecha:Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
