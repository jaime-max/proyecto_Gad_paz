import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // 👈 Agrega ReactiveFormsModule aquí
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css'] // 👈 Corrige "styleUrl" a "styleUrls"
})
export class FormularioUsuarioComponent {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombre: [''],
      telefono: [''],
      email: ['']
    });
  }

  guardarUsuario() {
    console.log(this.usuarioForm.value);
  }
}
