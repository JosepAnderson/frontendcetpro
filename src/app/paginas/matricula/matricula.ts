import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({ selector:'app-matricula', imports:[ReactiveFormsModule,RouterLink], templateUrl:'./matricula.html', styleUrl:'./matricula.css', changeDetection:ChangeDetectionStrategy.OnPush })
export class Matricula { private readonly fb=inject(FormBuilder); readonly enviado=signal(false); readonly formulario=this.fb.nonNullable.group({apellidoPaterno:['',[Validators.required]],apellidoMaterno:['',[Validators.required]],nombres:['',[Validators.required]],documento:['',[Validators.required]],provincia:[''],distrito:[''],telefono:['',[Validators.required]],correo:['',[Validators.required,Validators.email]],carrera:['',[Validators.required]],turno:['Mañana',[Validators.required]]}); enviar(){if(this.formulario.valid)this.enviado.set(true);else this.formulario.markAllAsTouched();} }
