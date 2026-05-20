import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule],
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
    }
  ];

  irModulo(ruta: string): void {
    this.router.navigate([ruta]);
  }
}
