import { Component } from '@angular/core';
import { SaludadorComponent } from './saludador/saludador';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SaludadorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Curso Angular';
}
