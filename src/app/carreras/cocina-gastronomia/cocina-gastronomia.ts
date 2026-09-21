import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-cocina-gastronomia',
  imports: [RouterLink, Footer],
  templateUrl: './cocina-gastronomia.html',
  styleUrl: './cocina-gastronomia.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocinaGastronomiaComponent {
  readonly nombre = 'Cocina y Servicios Gastronómicos';
  readonly etiqueta = 'PROGRAMA MODULAR OFICIAL · ACREDITADO POR MINEDU';
  readonly descripcion =
    'Esta carrera técnica brinda una formación integral y práctica en técnicas culinarias profesionales, manipulación higiénica de alimentos (normas BPM), preparación de recetas tradicionales ayacuchanas y lo mejor de la cocina nacional e internacional.';
  readonly imagen = 'photo-1556910103-1c02745aae4d';
  readonly aprendizajes = [
    'Técnicas de corte y manipulación de alimentos: dominio de cuchillería, cortes clásicos, inocuidad alimentaria y Buenas Prácticas de Manufactura.',
    'Gastronomía regional ayacuchana: elaboración y rescate de platos emblemáticos de Huamanga y los Andes.',
    'Cocina peruana criolla y fusión: preparación de ceviches, pescados, mariscos y guisos tradicionales.',
    'Cocina internacional y montaje de banquetes: pastas, salsas, buffets, costeo y gestión de eventos.',
  ];
  readonly salidas = [
    'Restaurantes y picanterías',
    'Hoteles turísticos',
    'Empresas de catering',
    'Emprendimiento gastronómico',
  ];
}
