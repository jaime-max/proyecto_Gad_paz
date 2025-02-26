import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ]
})
export class UsuariosModule { }
