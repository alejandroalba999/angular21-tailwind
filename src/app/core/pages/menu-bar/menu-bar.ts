import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'fe-menu-bar',
  imports: [
    MenubarModule,
    ButtonModule,
    AvatarModule,
    RouterModule
  ],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
})
export class MenuBar {

  items: MenuItem[] = [
      {
        label: 'Viajes',
        icon: 'pi pi-truck',
        items: [
          {
            label: 'Listado',
            icon: 'pi pi-list',
            routerLink: '/viajes'
          },
          {
            label: 'Nuevo viaje',
            icon: 'pi pi-plus',
            routerLink: '/viajes/nuevo'
          }
        ]
      },
      {
        label: 'Movimiento Regular',
        icon: 'pi pi-copy',
        items: [
          {
            label: 'Listado',
            icon: 'pi pi-list',
            routerLink: '/movimiento_regular'
          },
          {
            label: 'Nuevo movimiento',
            icon: 'pi pi-plus',
            routerLink: '/movimiento_regular/nuevo'
          }
        ]
      }
  ];

}
