import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';
interface Taller {
  nombre: string;
  categoria: string;
  texto: string;
  imagen: string;
}
@Component({
  selector: 'app-galeria',
  imports: [RouterLink, Footer],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Galeria {
  readonly filtro = signal('Todos los Talleres');
  readonly categorias = [
    'Todos los Talleres',
    'Gastronomía y Pastelería',
    'Informática y Redes',
    'Confección Textil',
    'Peluquería y Estilismo',
    'Electrónica y Robótica',
  ];
  readonly talleres: Taller[] = [
    {
      nombre: 'Taller de Cocina Industrial y Buffet',
      categoria: 'Gastronomía y Pastelería',
      texto: 'Equipamiento culinario completo',
      imagen: 'photo-1556910103-1c02745aae4d',
    },
    {
      nombre: 'Laboratorio de Tecnologías y Redes',
      categoria: 'Informática y Redes',
      texto: 'Conectividad de fibra y racks de prueba',
      imagen: 'photo-1516321318423-f06f85e504b3',
    },
    {
      nombre: 'Aula de Patronaje y Confección Textil',
      categoria: 'Confección Textil',
      texto: 'Maquinaria pesada y tableros de trazo',
      imagen: 'photo-1558618666-fcd25c85cd64',
    },
    {
      nombre: 'Salón de Peluquería Integral y Barbería',
      categoria: 'Peluquería y Estilismo',
      texto: 'Prácticas reales con modelos supervisados',
      imagen: 'photo-1560066984-138dadb4c035',
    },
    {
      nombre: 'Taller de Electrónica y Automatización',
      categoria: 'Electrónica y Robótica',
      texto: 'Diagnóstico, soldadura y robótica aplicada',
      imagen: 'photo-1581091226825-a6a2a5aee158',
    },
    {
      nombre: 'Panadería y Pastelería Fina',
      categoria: 'Gastronomía y Pastelería',
      texto: 'Hornos de fermentación y templado',
      imagen: 'photo-1578985545062-69928b1d9587',
    },
    {
      nombre: 'Mantenimiento y Reparación de Equipos',
      categoria: 'Electrónica y Robótica',
      texto: 'Hardware, firmware y diagnóstico preventivo',
      imagen: 'photo-1518770660439-4636190af475',
    },
    {
      nombre: 'Exposición: Día del Logro',
      categoria: 'Todos los Talleres',
      texto: 'Presentación de proyectos productivos',
      imagen: 'photo-1523240795612-9a054b0db644',
    },
    {
      nombre: 'Acabados y Bordado Computarizado',
      categoria: 'Confección Textil',
      texto: 'Identidad regional y producción en serie',
      imagen: 'photo-1558618666-fcd25c85cd64',
    },
  ];
  readonly visibles = () =>
    this.filtro() === 'Todos los Talleres'
      ? this.talleres
      : this.talleres.filter((t) => t.categoria === this.filtro());
  seleccionar(c: string) {
    this.filtro.set(c);
  }
}
