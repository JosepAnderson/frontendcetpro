import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-panaderia-pasteleria',
  imports: [RouterLink, Footer],
  templateUrl: './panaderia-pasteleria.html',
  styleUrl: './panaderia-pasteleria.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanaderiaPasteleriaComponent {
  readonly nombre = 'Panadería y Pastelería';
  readonly etiqueta = 'CARRERA TÉCNICA PRODUCTIVA';
  readonly descripcion =
    'Especialidad técnica enfocada en la producción artesanal e industrial de panes tradicionales, panes especiales con granos andinos, bollería fina, masas fermentadas y bases de repostería comercial bajo rigurosos estándares sanitarios y de calidad.';
  readonly imagen = 'photo-1509440159596-0249088772ff';
  readonly aprendizajes = [
    'Procesos de Fermentación y Amasado: técnicas de masas madre, control de tiempos de levado y manipulación segura.',
    'Panificación Tradicional y Regional: elaboración de panes ayacuchanos y productos con granos nativos.',
    'Bollería y Hojaldres: croissants, danesas, empanadas comerciales y postres.',
    'Pastelería Comercial Básica: tortas, queques húmedos, decoración, costos y gestión de recetas.',
  ];
  readonly salidas = [
    'Panaderías comerciales',
    'Cadenas de supermercados',
    'Cafeterías y hoteles',
    'Emprendimiento propio',
  ];
}
