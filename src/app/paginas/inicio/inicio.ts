import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Inicio {
  readonly programas = [
    'Plataforma y Serv. TI',
    'Cocina & Gastronomía',
    'Panadería y Pastelería',
    'Peluquería y Barbería',
    'Estilismo Integral',
    'Sistemas Electrónicos',
    'Auxiliar Administrativo',
    'Cuidado Infantil y Mayor',
  ];
}
