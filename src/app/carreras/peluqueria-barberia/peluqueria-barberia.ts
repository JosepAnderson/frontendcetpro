import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-peluqueria-barberia',
  imports: [RouterLink, Footer],
  templateUrl: './peluqueria-barberia.html',
  styleUrl: './peluqueria-barberia.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeluqueriaBarberiaComponent {
  readonly nombre = 'Peluquería y Barbería';
  readonly etiqueta = 'PROGRAMA TÉCNICO MODULAR';
  readonly descripcion =
    'Formación técnica y práctica orientada al dominio integral del cuidado estético capilar y facial masculino y femenino. Desarrollarás habilidades de alta precisión en corte, estilismo, afeitado tradicional y técnicas contemporáneas de barbería y peluquería profesional.';
  readonly imagen = 'photo-1560066984-138dadb4c035';
  readonly aprendizajes = [
    'Técnicas de corte: corte clásico y moderno con tijera, navaja y máquina para damas, caballeros y niños.',
    'Afeitado y barbería: degradados, fade, perfilado y diseño de barba y bigote.',
    'Tratamientos capilares: lavado técnico, masajes craneales, hidratación profunda, botox capilar y cauterización.',
    'Colorimetría: aplicación de tintes, decoloración, mechas, matizaciones y cobertura profesional de canas.',
    'Bioseguridad e higiene: protocolos de esterilización, desinfección de herramientas y asepsia.',
  ];
  readonly salidas = [
    'Barberías y barber shops',
    'Salones de belleza',
    'Centros de estética',
    'Emprendimiento propio',
  ];
}
