import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
interface Programa {
  nombre: string;
  categoria: string;
  texto: string;
  imagen: string;
}
@Component({
  selector: 'app-carreras',
  imports: [RouterLink],
  templateUrl: './carreras.html',
  styleUrl: './carreras.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carreras {
  readonly filtro = signal('Todas');
  readonly categorias = [
    'Todas',
    'Tecnología',
    'Gastronomía',
    'Belleza',
    'Salud y Cuidados',
    'Textil',
    'Gestión',
  ];
  readonly programas: Programa[] = [
    {
      nombre: 'Mantenimiento de Sistemas Electrónicos',
      categoria: 'Tecnología',
      texto:
        'Instalación, mantenimiento y reparación de circuitos, audio, video y control automatizado.',
      imagen: 'photo-1516321318423-f06f85e504b3',
    },
    {
      nombre: 'Plataformas de Servicios de TI',
      categoria: 'Tecnología',
      texto: 'Manejo de software ofimático, sistemas operativos, redes y soluciones digitales.',
      imagen: 'photo-1551434678-e076c223a692',
    },
    {
      nombre: 'Peluquería y Barbería',
      categoria: 'Belleza',
      texto:
        'Corte clásico y urbano, afeitado, diseño de barba, peinados y tratamientos capilares.',
      imagen: 'photo-1560066984-138dadb4c035',
    },
    {
      nombre: 'Cuidados del Niño y del Adulto Mayor',
      categoria: 'Salud y Cuidados',
      texto: 'Estimulación temprana, higiene geriátrica, nutrición adaptada y bienestar integral.',
      imagen: 'photo-1584515933487-779824d29309',
    },
    {
      nombre: 'Cocina y Servicios Gastronómicos',
      categoria: 'Gastronomía',
      texto:
        'Técnicas culinarias profesionales, inocuidad alimentaria y gastronomía típica regional.',
      imagen: 'photo-1556910103-1c02745aae4d',
    },
    {
      nombre: 'Corte y Ensamblaje Textil',
      categoria: 'Textil',
      texto: 'Diseño de moldes, patronaje industrial, confección y control de calidad textil.',
      imagen: 'photo-1558618666-fcd25c85cd64',
    },
    {
      nombre: 'Estilismo Integral',
      categoria: 'Belleza',
      texto: 'Coloración técnica, maquillaje profesional, peinados y asesoría de imagen.',
      imagen: 'photo-1522337360788-8b13dee7a37e',
    },
    {
      nombre: 'Panadería y Pastelería',
      categoria: 'Gastronomía',
      texto: 'Producción artesanal e industrial de panes, bollería y postres de alta rotación.',
      imagen: 'photo-1509440159596-0249088772ff',
    },
    {
      nombre: 'Pastelería Fina',
      categoria: 'Gastronomía',
      texto: 'Repostería creativa, chocolate, fondant y montaje de mesas dulces.',
      imagen: 'photo-1578985545062-69928b1d9587',
    },
    {
      nombre: 'Auxiliar Administrativo',
      categoria: 'Gestión',
      texto: 'Gestión documental, archivo, software administrativo y atención de soporte.',
      imagen: 'photo-1497366754035-f200968a6e72',
    },
  ];
  readonly visibles = () =>
    this.filtro() === 'Todas'
      ? this.programas
      : this.programas.filter((p) => p.categoria === this.filtro());
  seleccionar(categoria: string) {
    this.filtro.set(categoria);
  }
}
