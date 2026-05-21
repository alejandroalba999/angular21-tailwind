import { TableColumn } from "../../../shared/interfaces/dynamic-table.interface";

export const data = [
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

export const definirColumnas: TableColumn[]  = [
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