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
      header: 'VIAJE',
      sortable: true
    },
    {
      field: 'cve_ubicacion_origen',
      header: 'CLAVE DE ORIGEN'
    },
    {
      field: 'cve_ubicacion_destino',
      header: 'CLAVE DE DESTINO'
    },
    {
      field: 'flete',
      header: 'FLETE',
      type: 'text'
    },
    {
      field: 'eta_planeado',
      header: 'ETA PLANEADO',
      type: 'date'
    },
    {
      field: 'eta_calculado',
      header: 'ETA CALCULADO',
      type: 'date'
    },
    {
      field: 'facturar_a',
      header: 'RFC'
    },
    {
      field: 'estado',
      header: 'Estatus',
      type: 'tag',
      tagSeverity: (value) => {
        switch (value) {
          case 'ACTIVO':
            return 'success';
          case 'INICIAD0':
            return 'info';
          case 'CANCELADO':
            return 'warn';
          default:
            return 'light';
        }
      }
    },
    {
      field: 'custodia',
      header: 'Custodia',
      type: 'boolean'
    }
  ];