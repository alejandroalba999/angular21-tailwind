import { TableColumn } from "../../../shared/interfaces/dynamic-table.interface";

export const definirColumnas: TableColumn[] = [
    {
        field: 'id_movreg',
        header: 'No. movimiento',
        sortable: true
    },
    {
        field: 'cve_ubicacion_origen',
        header: 'EMPAQUE OPRIGEN'
    },
    {
        field: 'cve_ubicacion_destino',
        header: 'EMPAQUE DESTINO'
    },
    {
        field: 'nombre_cliente_consolidado',
        header: 'CLIENTE'
    },
    {
        field: 'nombre_corto_cliente',
        header: 'NOMBRE CORTO'
    },
    {
        field: 'desglosar_casetas',
        header: 'CASETAS',
        type: 'tag',
        tagSeverity: (value) => {
            switch (value) {
                case 'S':
                    return 'success';
                case 'N':
                    return 'danger';
                default:
                    return 'info';
            }
        }
    },
    {
        field: 'desglosar_cruce',
        header: 'CRUCE',
        type: 'tag',
        tagSeverity: (value) => {
            switch (value) {
                case 'S':
                    return 'success';
                case 'N':
                    return 'danger';
                default:
                    return 'info';
            }
        }
    },
    {
        field: 'desglosar_cpac',
        header: 'CPAC',
        type: 'tag',
        tagSeverity: (value) => {
            switch (value) {
                case 'S':
                    return 'success';
                case 'N':
                    return 'danger';
                default:
                    return 'info';
            }
        }
    },
    {
        field: 'desglosar_gatas',
        header: 'GATAS',
        type: 'tag',
        tagSeverity: (value) => {
            switch (value) {
                case 'S':
                    return 'success';
                case 'N':
                    return 'danger';
                default:
                    return 'info';
            }
        }
    },
    {
        field: 'desglosar_paradas_intermedias',
        header: 'P.I.',
        type: 'tag',
        tagSeverity: (value) => {
            switch (value) {
                case 'S':
                    return 'success';
                case 'N':
                    return 'danger';
                default:
                    return 'info';
            }
        }
    },
    {
        field: 'desglosar_seguro_carga',
        header: 'SEGURO CARGA',
        type: 'tag',
        tagSeverity: (value) => {
            switch (value) {
                case 'S':
                    return 'success';
                case 'N':
                    return 'danger';
                default:
                    return 'info';
            }
        }
    },
]