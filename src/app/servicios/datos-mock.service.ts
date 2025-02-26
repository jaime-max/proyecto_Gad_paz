import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosMockService {
  usuarios = [
    { id: 1, nombre: 'Juan Pérez', telefono: '123456789', email: 'juan@example.com' },
    { id: 2, nombre: 'María López', telefono: '987654321', email: 'maria@example.com' }
  ];

  documentos = [
    { id: 1, calle: 'Av. Siempre Viva', ciudad: 'Springfield', estado: 'IL', codigoPostal: '12345', pais: 'EE.UU.' },
    { id: 2, calle: 'Calle Falsa 123', ciudad: 'Ciudad Gótica', estado: 'NY', codigoPostal: '54321', pais: 'EE.UU.' }
  ];

  notificaciones = [
    { id: 1, mensaje: 'Tu documento ha sido aprobado', usuario: 'Juan Pérez' },
    { id: 2, mensaje: 'Tienes una nueva notificación', usuario: 'María López' }
  ];
  constructor() { }

  obtenerUsuarios() {
    return this.usuarios;
  }

  obtenerDocumentos() {
    return this.documentos;
  }

  obtenerNotificaciones() {
    return this.notificaciones;
  }
}
