import { Component, OnInit } from '@angular/core';
import { DatosMockService } from '../../servicios/datos-mock.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,  // 👈 Es un Standalone Component
  imports: [CommonModule],  // 👈 Asegúrate de agregar CommonModule aquí
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'] // 👈 Corregí "styleUrl" a "styleUrls"
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private datosMockService: DatosMockService) {}

  ngOnInit() {
    this.usuarios = this.datosMockService.obtenerUsuarios();
  }
}
