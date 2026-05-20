import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterLink } from "@angular/router";
import { DynamicTable } from '../../../../shared/components/dynamic-table/dynamic-table';
import { TableColumn } from '../../../../shared/interfaces/dynamic-table.interface';
@Component({
  selector: 'app-listado',
  imports: [ButtonModule, CardModule, RouterLink, DynamicTable],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {
  cols: TableColumn[] = [
    {
      field: 'id_viaje',
      header: 'Viaje',
      sortable: true
    },
    {
      field: 'operador',
      header: 'Operador'
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

  viajes = [
    {
      id_viaje: 1001,
      operador: 'Juan Pérez',
      estatus: 'ACTIVO',
      custodia: true
    },
    {
      id_viaje: 1002,
      operador: 'Roberto Gomez',
      estatus: 'FINALIZADO',
      custodia: false
    },
    {
      id_viaje: 1003,
      operador: 'Ruben Fernandez',
      estatus: 'FINALIZADO',
      custodia: false
    },
    {
      id_viaje: 1004,
      operador: 'Carlos López',
      estatus: 'CANCELADO',
      custodia: false
    }
  ]
}
