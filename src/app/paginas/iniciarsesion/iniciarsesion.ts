import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({ selector:'app-iniciarsesion', imports:[FormsModule,RouterLink], templateUrl:'./iniciarsesion.html', styleUrl:'./iniciarsesion.css', changeDetection:ChangeDetectionStrategy.OnPush })
export class Iniciarsesion { readonly mostrar=signal(false); readonly error=signal(false); usuario=''; contrasena=''; ingresar(){this.error.set(!this.usuario||!this.contrasena);} }
