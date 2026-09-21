import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-cuidados-nino-adulto',
  imports: [RouterLink, Footer],
  templateUrl: './cuidados-nino-adulto.html',
  styleUrl: './cuidados-nino-adulto.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuidadosNinoAdultoComponent {
  readonly nombre = 'Cuidados del Niño y del Adulto Mayor';
  readonly etiqueta = 'CARRERA TÉCNICA';
  readonly descripcion =
    'Forma asistentes técnicos capacitados para brindar atención integral humanizada a niños y adultos mayores, promoviendo su bienestar físico, cognitivo, emocional y social con sólidos valores éticos y vocación de servicio.';
  readonly imagen = 'photo-1584515933487-779824d29309';
  readonly aprendizajes = [
    'Estimulación Temprana: técnicas de desarrollo neuromotor y lúdico de 0 a 5 años.',
    'Nutrición y Alimentación en Edades Extremas: dietas balanceadas, higiene alimentaria y regímenes nutricionales.',
    'Primeros Auxilios y Signos Vitales: soporte básico, control de signos y administración de fármacos.',
    'Acompañamiento Gerontológico: envejecimiento activo, prevención del deterioro cognitivo y cuidados con dignidad.',
  ];
  readonly salidas = [
    'Cunas y guarderías infantiles',
    'Asistencia personalizada a domicilio',
    'Asilos y centros geriátricos',
    'Clínicas y centros de salud',
  ];
}
