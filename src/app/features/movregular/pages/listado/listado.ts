import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DynamicTable } from '../../../../shared/components/dynamic-table/dynamic-table';
import { RouterLink } from '@angular/router';
import { TableColumn } from '../../../../shared/interfaces/dynamic-table.interface';
import { FeTitleComponent } from '../../../../shared/components/title/title';

@Component({
  selector: 'app-listado',
  imports: [
    CardModule, ButtonModule, 
    DynamicTable, RouterLink, FeTitleComponent
  ],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {
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
        field: 'cve_empaque_destino',
        header: 'Empaque Destino'
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
        cve_empaque_destino: 'NISS1AGUAAG',
        estatus: 'ACTIVO',
        custodia: true
      },
      {
        id_movreg: 1002,
        cve_empaque_origen: 'AGUATALARETX',
        cve_empaque_destino: 'NISS2AGUAAG',
        estatus: 'FINALIZADO',
        custodia: false
      },
      {
        id_movreg: 1003,
        cve_empaque_origen: 'SFRTALARETX',
        cve_empaque_destino: 'FRIOEXAGUAAG',
        estatus: 'FINALIZADO',
        custodia: false
      },
      {
        id_movreg: 1004,
        cve_empaque_origen: 'NULATALARETX',
        cve_empaque_destino: 'GUADZAPOJA',
        estatus: 'CANCELADO',
        custodia: false
      }
    ]
}
