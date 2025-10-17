import { Component } from '@angular/core';

@Component({
  selector: 'app-saludador',
  standalone: true,
  templateUrl: './saludador.html',
  styleUrls: ['./saludador.css']
})
export class SaludadorComponent {
  nombre: string = 'Sebastián';
}

