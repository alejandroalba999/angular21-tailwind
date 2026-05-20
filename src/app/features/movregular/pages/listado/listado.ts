import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CardList } from '../../../../shared/components/card-list/card-list';
import { ButtonModule } from 'primeng/button';
import { DynamicTable } from '../../../../shared/components/dynamic-table/dynamic-table';
import { RouterLink } from '@angular/router';
import { TableColumn } from '../../../../shared/interfaces/dynamic-table.interface';

@Component({
  selector: 'app-listado',
  imports: [CardModule, CardList, ButtonModule, DynamicTable, RouterLink],
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

   cols: TableColumn[] = [
      {
        field: 'id_movreg',
        header: 'No. movimiento',
        sortable: true
      },
      {
        field: 'cve_empaque_origen',
        header: 'Empaque Origen'
      },
      {
        field: 'estatus',
        header: 'Estatus',
        type: 'tag',
        tagSeverity: (value) => {
          switch (value) {
            case 'ACTIVO':
              return 'success';
            case 'FINALIZADO':
              return 'info';
            case 'CANCELADO':
              return 'warn';
            default:
              return 'contrast';
          }
        }
      },
      {
        field: 'custodia',
        header: 'Custodia',
        type: 'boolean'
      }
    ];
  
    movRegulares = [
      {
        id_movreg: 1001,
        cve_empaque_origen: 'FALKTALARETX',
        estatus: 'ACTIVO',
        custodia: true
      },
      {
        id_movreg: 1002,
        cve_empaque_origen: 'AGUATALARETX',
        estatus: 'FINALIZADO',
        custodia: false
      },
      {
        id_movreg: 1003,
        cve_empaque_origen: 'SFRTALARETX',
        estatus: 'FINALIZADO',
        custodia: false
      },
      {
        id_movreg: 1004,
        cve_empaque_origen: 'NULATALARETX',
        estatus: 'CANCELADO',
        custodia: false
      }
    ]
}
