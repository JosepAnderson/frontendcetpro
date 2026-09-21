import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-pasteleria-fina',
  imports: [RouterLink, Footer],
  templateUrl: './pasteleria-fina.html',
  styleUrl: './pasteleria-fina.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasteleriaFinaComponent {
  readonly nombre = 'Pastelería Fina';
  readonly etiqueta = 'PROGRAMA TÉCNICO PRODUCTIVO OFICIAL';
  readonly descripcion =
    'Desarrolla destrezas especializadas en repostería creativa, bombonería fina con cacao peruano, chocolatería artesanal y diseño de dulces de alta pastelería con técnicas profesionales y estándares comerciales.';
  readonly imagen = 'photo-1578985545062-69928b1d9587';
  readonly aprendizajes = [
    'Masas quebradas y cremas gourmet: técnicas de masas secas, emulsiones, mousses, cremas base y verrines de autor.',
    'Chocolatería y templado de chocolate: física del cacao, templado por sembrado, trufas finas y bombones con brillo espejo.',
    'Decoración de tortas temáticas en fondant: estructuración de pasteles de pisos, bordes florales y modelado en pasta de azúcar.',
    'Mesas dulces para eventos y costeo: diseño de mesas de postres, costeo de recetas, packaging y gestión de catering dulce.',
  ];
  readonly salidas = [
    'Pastelerías y confiterías gourmet',
    'Hoteles de lujo y resorts',
    'Catering dulce para bodas y eventos',
    'Taller de pastelería personalizada',
  ];
}
