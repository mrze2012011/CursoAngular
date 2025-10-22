import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destino-viaje',
  standalone: true,
  templateUrl: './destino-viaje.html',
  styleUrls: ['./destino-viaje.css']
})
export class DestinoViajeComponent implements OnInit{
  nombre: string;
  constructor() {
    this.nombre = 'Nombre por defecto'
  }
  ngOnInit(): void {
    
  }
}

