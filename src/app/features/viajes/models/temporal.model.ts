import { TableColumn } from "../../../shared/interfaces/dynamic-table.interface";

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
            return 'danger';
          default:
            return 'warn';
        }
      }
    },
    {
      field: 'custodia',
      header: 'Custodia',
      type: 'boolean'
    }
  ];