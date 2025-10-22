import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DestinoViajeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-wishlist-simple');
}
  