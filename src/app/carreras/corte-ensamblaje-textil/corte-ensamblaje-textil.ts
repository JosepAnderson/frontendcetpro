import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-corte-ensamblaje-textil',
  imports: [RouterLink, Footer],
  templateUrl: './corte-ensamblaje-textil.html',
  styleUrl: './corte-ensamblaje-textil.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorteEnsamblajeTextilComponent {
  readonly nombre = 'Corte y Ensamblaje (Confección Textil)';
  readonly etiqueta = 'ESPECIALIDAD TÉCNICA';
  readonly descripcion =
    'Prepara a los estudiantes en el arte y técnica de la confección de prendas, desde el diseño y escalado de moldes hasta el ensamblaje final con maquinaria industrial pesada y riguroso control de calidad textil.';
  readonly imagen = 'photo-1558618666-fcd25c85cd64';
  readonly aprendizajes = [
    'Manejo de máquinas de coser industriales recta y remalladora.',
    'Patronaje anatómico y escalado de tallas en tejido plano y punto.',
    'Confección completa de prendas deportivas, casuales y de trabajo.',
    'Acabados textiles, planchado industrial y control de calidad.',
  ];
  readonly salidas = [
    'Talleres de confección textil',
    'Marcas textiles independientes',
    'Microempresas de moda',
    'Emprendimiento propio',
  ];
}
