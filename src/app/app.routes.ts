import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { FormularioUsuarioComponent } from './usuarios/formulario-usuario/formulario-usuario.component';
import { ListaDocumentosComponent } from './documentos/lista-documentos/lista-documentos.component';
import { DetalleDocumentoComponent } from './documentos/detalle-documento/detalle-documento.component';
import { ListaNotificacionesComponent } from './notificaciones/lista-notificaciones/lista-notificaciones.component';

export const routes: Routes = [
    { path: 'usuarios', component: ListaUsuariosComponent },
    { path: 'usuarios/nuevo', component: FormularioUsuarioComponent },
    { path: 'documentos', component: ListaDocumentosComponent },
    { path: 'documentos/:id', component: DetalleDocumentoComponent },
    { path: 'notificaciones', component: ListaNotificacionesComponent },
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];
