import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CardList } from '../../../../shared/components/card-list/card-list';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule, CardList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private readonly router = inject(Router);

  modulos: ModuloDashboard[] = [
    {
      nombre: 'Viajes',
      descripcion: 'Administración y seguimiento de viajes.',
      icono: 'pi pi-send',
      ruta: '/viajes'
    },
    {
      nombre: 'Movimientos Regulares',
      descripcion: 'Control de movimientos regulares.',
      icono: 'pi pi-directions',
      ruta: '/movimiento_regular'
    },
    {
      nombre: 'Solicitudes de Importación',
      descripcion: 'Gestión de viajes de importación.',
      icono: 'pi pi-box',
      ruta: '/solicitud_importacion'
    }
  ];

  irModulo(ruta: string): void {
    this.router.navigate([ruta]);
  }
}
