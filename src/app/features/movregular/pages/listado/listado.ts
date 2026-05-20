import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CardList } from '../../../../shared/components/card-list/card-list';

@Component({
  selector: 'app-listado',
  imports: [CardModule, CardList],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {
  modulos: ModuloDashboard[] = [
    {
      nombre: 'Dashboard',
      descripcion: 'Vista principal del aplicativo Frio Express.',
      icono: 'pi pi-home',
      ruta: '/'
    },
    {
      nombre: 'Viajes',
      descripcion: 'Administración y seguimiento de viajes.',
      icono: 'pi pi-send',
      ruta: '/viajes'
    }
  ];
}
