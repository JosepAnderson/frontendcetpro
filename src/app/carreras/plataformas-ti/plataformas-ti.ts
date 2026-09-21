import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-plataformas-ti',
  imports: [RouterLink, Footer],
  templateUrl: './plataformas-ti.html',
  styleUrl: './plataformas-ti.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlataformasTiComponent {
  readonly nombre = 'Plataformas de Servicios de Tecnologías de la Información';
  readonly etiqueta = 'PROGRAMA MODULAR OFICIAL · ACREDITADO POR MINEDU';
  readonly descripcion =
    'Especialidad técnica orientada a formar profesionales capacitados en soporte integral de hardware y software, administración de redes, soluciones ofimáticas avanzadas y herramientas digitales para optimizar operaciones informáticas.';
  readonly imagen = 'photo-1516321318423-f06f85e504b3';
  readonly aprendizajes = [
    'Soporte Técnico de TI: diagnóstico electrónico, ensamblaje, mantenimiento preventivo y configuración de sistemas operativos.',
    'Ofimática y Gestión Cloud: hojas de cálculo avanzadas, automatización documental y flujos colaborativos.',
    'Redes y Conectividad: cableado estructurado, routers, switches, redes Wi-Fi empresariales y seguridad perimetral.',
    'Diseño Web y Digital: creación de sitios web, piezas gráficas y presencia digital para pequeños negocios.',
  ];
  readonly salidas = [
    'Empresas y pymes',
    'Sector público',
    'Áreas de soporte TI',
    'Emprendimiento tecnológico',
  ];
}
