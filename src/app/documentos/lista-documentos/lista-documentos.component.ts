import { Component, OnInit } from '@angular/core';
import { DatosMockService } from '../../servicios/datos-mock.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-documentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-documentos.component.html',
  styleUrl: './lista-documentos.component.css'
})
export class ListaDocumentosComponent implements OnInit {
  documentos: any[]= [];

  constructor(private datosMockService: DatosMockService){}

  ngOnInit() {
    this.documentos = this.datosMockService.obtenerDocumentos();
  }

}
