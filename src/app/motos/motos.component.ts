import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent implements OnInit {
  recibidoDePadre!: string;
  articulos = [{codigo:1, descripcion:'La SH350i tiene más potencia gracias a un motor de 4 válvulas refrigerado por líquido de mayor capacidad, que proporciona un par motor intenso de bajo a medio régimen para ayudarte a desplazarte por la ciudad.', precio:1.5, nombre: 'SH350i', img:'assets/images/moto1.jpg'},
               {codigo:2, descripcion:'Un motor bicilíndrico en paralelo completamente nuevo, armado con un vórtice realzado mejora la eficiencia de la admisión y la tecnología de cilindros superdeportivos reduce la fricción mientras bombea 67,5 kW (92 cv) en su punto máximo con un par de 75 Nm', precio:15.50, nombre: 'CB750 Hornet', img:'assets/images/moto2.jpg'},
               {codigo:3, descripcion:'El motor bicilíndrico con un árbol de levas en cabeza (SOHC) de 8 válvulas produce 75 kW en el pico con un par de 105 Nm. Pero es la forma que tiene de responder este motor lo que emociona.', precio:102.30, nombre: 'CRF1100L AFRICA TWIN', img:'assets/images/moto3.jpg'},
               {codigo:4, descripcion:'La versátil NT1100 tiene una aerodinámica elegante, una pantalla grande ajustable en 5 posiciones y deflectores superior/inferior que brindan una protección excelente frente al viento.', precio:70, nombre: 'NT1100', img:'assets/images/moto4.jpg'},
               {codigo:5, descripcion:'Las carreras mejoran la selección. Lo lleva en la sangre y la familia continúa con su encarnación más reciente. La tecnología de carreras, derivada de la máquina RC213V de MotoGP, 8 veces campeona del mundo con Marc Márquez', precio:60.6, nombre: 'CBR900R Fireblade ', img:'assets/images/moto5.jpg'},
              ];
              
  constructor() { }

  ngOnInit(): void {
  }
  comprar(_articulo: { codigo: number; }){
    // alert('compraste el articulo: ' + _articulo.descripcion);
    this.recibidoDePadre = _articulo.codigo+'';
  }
  ;
  
  
  
}
