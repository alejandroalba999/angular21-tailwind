import { DynamicFormConfig } from "../../../shared/interfaces/dynamic-form.interface";

export const FORM_DEFAULT: DynamicFormConfig = {
    titulo: 'Nuevo Viaje',
    icono: 'fa fa-calendar',
    formularios: [
        {
            titulo: 'Nuevo Viaje',
            icono: 'pi pi-calendar',
            identificador: "0",
            formulario: {
                fields: [
                    {
                        type: "date",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "fec_carga",
                        label: "FECHA DE CARGA",
                        minLength: 0,
                        maxLength: 10,
                        placeholder: "",
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => false,
                        requiredFn: () => true,
                        visible: () => true,
                        required: true,
                        hidden: false
                    },
                    {
                        type: "date",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "hora_carga",
                        label: "HORA DE CARGA",
                        minLength: 0,
                        maxLength: 10,
                        placeholder: "",
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => false,
                        requiredFn: () => true,
                        visible: () => true,
                        required: true,
                        hidden: false
                    },
                    {
                        type: "date",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "fec_descarga",
                        label: "FECHA DE DESCARGA",
                        placeholder: "",
                        minLength: 0,
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => false,
                        requiredFn: () => true,
                        visible: () => true,
                        required: true,
                        hidden: false
                    },
                    {
                        type: "date",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "hora_descarga",
                        label: "HORA DE DESCARGA",
                        placeholder: "",
                        minLength: 0,
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => false,
                        requiredFn: () => true,
                        visible: () => true,
                        required: true,
                        hidden: false
                    },
                    {
                        type: "date",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "fec_carga_original",
                        label: "CITA DE CARGA ORIGINAL",
                        minLength: 0,
                        placeholder: '',
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: Date.now(),
                        disabledFn: () => true,
                        requiredFn: () => false,
                        visible: () => true,
                        hidden: false,
                        disabled: true
                    },
                    {
                        type: "date",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "hora_carga_original",
                        label: "HORA DE CITA DE CARGA ORIGINAL",
                        minLength: 0,
                        maxLength: 10,
                        placeholder: "",
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => true,
                        requiredFn: () => false,
                        visible: () => true,
                        hidden: false,
                        disabled: true
                    },
                    {
                        type: "date",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "fec_descarga_original",
                        label: "CITA DE DESCARGA ORIGINAL",
                        placeholder: "",
                        minLength: 0,
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => true,
                        requiredFn: () => true,
                        visible: () => true,
                        hidden: false,
                        disabled: true
                    },
                    {
                        type: "date",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "hora_descarga_original",
                        label: "HORA DE CITA DE DESCARGA ORIGINAL",
                        placeholder: "",
                        minLength: 0,
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => true,
                        requiredFn: () => true,
                        visible: () => true,
                        hidden: false,
                        disabled: true
                    }
                ]
            }
        },
        {
            titulo: 'Movimiento Regular',
            icono: 'pi pi-clipboard',
            identificador: "0",
            formulario: {
                fields: [
                    {
                        type: "text",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "id_movreg",
                        label: "MOV REGULAR",
                        minLength: 0,
                        placeholder: '',
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => false,
                        requiredFn: () => true,
                        visible: () => true,
                        hidden: false,
                        required: true
                    },
                    {
                        type: "text",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "version",
                        label: "VERSIÓN",
                        minLength: 0,
                        maxLength: 10,
                        placeholder: "",
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => true,
                        requiredFn: () => false,
                        visible: () => true,
                        hidden: false,
                        disabled: true
                    },
                    {
                        type: "text",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "nombre_corto",
                        label: "NOMBRE CORTO",
                        minLength: 0,
                        maxLength: 10,
                        placeholder: "",
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => true,
                        requiredFn: () => false,
                        visible: () => true,
                        hidden: false,
                        disabled: true
                    },
                    {
                        type: "text",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "facturar_a",
                        label: "FACTURAR A",
                        placeholder: "",
                        minLength: 0,
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => true,
                        requiredFn: () => false,
                        visible: () => true,
                        hidden: false,
                        disabled: true
                    },
                    {
                        type: "text",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "cve_origen",
                        label: "ORIGEN",
                        placeholder: "",
                        minLength: 0,
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => true,
                        requiredFn: () => false,
                        visible: () => true,
                        hidden: false,
                        disabled: true
                    },
                    {
                        type: "text",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "cve_destino",
                        label: "DESTINO",
                        placeholder: "",
                        minLength: 0,
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: () => true,
                        requiredFn: () => false,
                        visible: () => true,
                        hidden: false,
                        disabled: true
                    }
                ]
            },
            botonesHeader: [
                {
                    label: 'Detalle',
                    icon: 'pi pi-eye',
                    action: '',
                    severity: 'info',
                    visible: true,
                    disabled: true,
                    class: 'p-button p-button-sm'
                }
            ]
        },
        {
            titulo: 'Paradas Intermedias',
            icono: 'pi pi-map',
            identificador: "0",
            formulario: {
                fields: []
            },
            botonesHeader: [
                {
                    label: 'Agrear P.I.',
                    icon: 'pi pi-plus',
                    action: '',
                    severity: 'info',
                    visible: true,
                    disabled: true,
                    class: 'p-button p-button-sm'
                }
            ]
        },
        {
            titulo: 'Operación',
            icono: 'pi pi-microchip',
            identificador: "0",
            formulario: {
                fields: [
                    {
                        type: "select",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "tipo_carga",
                        label: "TIPO CARGA",
                        minLength: 0,
                        maxLength: 10,
                        placeholder: "",
                        min: 0,
                        max: 10,
                        pattern: "",
                        options: [
                            {
                                label: 'DESCARGA',
                                value: 'DES'
                            },
                            {
                                label: 'DIRECTA',
                                value: 'DIR'
                            }
                        ],
                        defaultValue: 'DIR',
                        disabledFn: () => false,
                        requiredFn: () => true,
                        visible: () => true,
                        required: true,
                        hidden: false
                    },
                    {
                        type: "text",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "entregar_en",
                        label: "ENTREGAR EN",
                        minLength: 0,
                        maxLength: 10,
                        placeholder: "",
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: null,
                        disabledFn: (form) => form?.tipo_carga === 'DIR',
                        requiredFn: () => true,
                        visible: () => true,
                        required: true,
                        hidden: false
                    },
                    {
                        type: "radio",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "descarga_autorizada",
                        label: "DESCARGA AUTORIZADA",
                        placeholder: '',
                        minLength: 0,
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        options: [
                            {
                                label: 'SI',
                                value: true
                            },
                            {
                                label: 'NO',
                                value: false
                            }
                        ],
                        pattern: "",
                        defaultValue: true,
                        disabledFn: (form) => form?.tipo_carga === 'DIR',
                        requiredFn: () => true,
                        visible: () => true,
                        required: true,
                        hidden: false,
                        disabled: true
                    }
                ]
            },
            botonesFooter: [
                {
                    label: 'CANCELAR',
                    severity: 'info',
                    class: 'p-button p-button-sm',
                    text: true,
                    rounded: true
                },
                 {
                    label: 'GUARDAR',
                    severity: 'info',
                    class: 'p-button p-button-sm',
                    rounded: true
                },
            ]
        },
    ]
};