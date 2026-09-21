import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-sistemas-electronicos',
  imports: [RouterLink, Footer],
  templateUrl: './sistemas-electronicos.html',
  styleUrl: './sistemas-electronicos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SistemasElectronicosComponent {
  readonly nombre = 'Mantenimiento de Sistemas Electrónicos';
  readonly etiqueta = 'PROGRAMA MODULAR OFICIAL · MINEDU';
  readonly descripcion =
    'Esta carrera técnica capacita en el diagnóstico, reparación, instalación y configuración integral de equipos y dispositivos electrónicos modernos. El estudiante desarrolla destrezas en circuitos de potencia, audio y video, microcontroladores, domótica y sistemas de videovigilancia y seguridad.';
  readonly imagen = 'photo-1518770660439-4636190af475';
  readonly aprendizajes = [
    'Electrónica e Instrumentación: manejo de instrumentos como multímetros y osciloscopios, lectura de esquemas técnicos e identificación de componentes analógicos y digitales.',
    'Equipos de Audio y Pantallas: técnicas de soldadura SMD, diagnóstico de fuentes conmutadas, amplificadores y reparación de pantallas LED y Smart TV.',
    'Domótica y Automatización: programación de microcontroladores Arduino y ESP32, integración de sensores, actuadores y control inalámbrico.',
    'Seguridad Electrónica y CCTV: instalación y configuración de cámaras de videovigilancia IP y analógicas, controles de acceso y cableado estructurado.',
  ];
  readonly salidas = ['Taller propio', 'Empresas de seguridad', 'Industria y telecomunicaciones'];
}
