import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';
@Component({
  selector: 'app-nosotros',
  imports: [RouterLink, Footer],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nosotros {}
