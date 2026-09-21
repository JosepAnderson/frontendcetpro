import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-estilismo-avanzado',
  imports: [RouterLink, Footer],
  templateUrl: './estilismo-avanzado.html',
  styleUrl: './estilismo-avanzado.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstilismoAvanzadoComponent {
  readonly nombre = 'Estilismo (Imagen Personal Avanzada)';
  readonly etiqueta = 'ESPECIALIDAD TÉCNICA';
  readonly descripcion =
    'Programa técnico formativo orientado a dominar las técnicas de transformación y estética capilar, cuidado integral de la imagen y maquillaje profesional. Desarrolla competencias prácticas basadas en tendencias globales y protocolos de bioseguridad para el sector de la belleza.';
  readonly imagen = 'photo-1522337360788-8b13dee7a37e';
  readonly aprendizajes = [
    'Visagismo y asesoría de imagen: morfología del rostro y diagnóstico integral para armonizar facciones.',
    'Colorimetría avanzada y balayage: técnicas de decoloración segura, mechas babylights y contouring capilar.',
    'Peinados de novia y alta gala: estructuración de moños, recogidos y ondas de tendencia.',
    'Maquillaje social y fotográfico: técnicas de piel blindada, smokey eyes y maquillaje glam.',
  ];
  readonly salidas = [
    'Salones de alta gama',
    'Spas y centros de bienestar',
    'Centros de estética',
    'Consultoría de imagen',
    'Emprendimiento o salón propio',
  ];
}
