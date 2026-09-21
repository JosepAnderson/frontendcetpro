import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-auxiliar-administrativo',
  imports: [RouterLink, Footer],
  templateUrl: './auxiliar-administrativo.html',
  styleUrl: './auxiliar-administrativo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuxiliarAdministrativoComponent {
  readonly nombre = 'Auxiliar Administrativo';
  readonly etiqueta = 'CARRERA TÉCNICA';
  readonly descripcion =
    'Formación práctica y técnica en gestión y trámite documentario oficial, archivo físico y digital, ofimática aplicada y atención administrativa.';
  readonly imagen = 'photo-1497366754035-f200968a6e72';
  readonly aprendizajes = [
    'Redacción formal ejecutiva y trámite documentario: elaboración de oficios, memorándums, solicitudes e informes.',
    'Gestión de archivos físicos y digitales: organización, clasificación documental y digitalización conforme a normas institucionales.',
    'Ofimática aplicada: dominio de hojas de cálculo, gestión de bases de datos, correspondencia y herramientas digitales.',
    'Control administrativo y facturación: manejo de inventarios, caja chica, comprobantes de pago y facturación electrónica.',
  ];
  readonly salidas = [
    'Entidades del sector público regional',
    'Notarías, estudios jurídicos y consultorías profesionales',
    'Empresas comerciales, financieras y cooperativas',
    'Centros de salud e instituciones educativas',
  ];
}
