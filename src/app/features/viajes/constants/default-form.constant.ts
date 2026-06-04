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
                        placeholder: '',
                        maxLength: 10,
                        min: 0,
                        max: 10,
                        pattern: "",
                        defaultValue: Date.now(),
                        disabledFn: () => false,
                        requiredFn: () => false,
                        visible: () => true,
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
                        disabledFn: () => true,
                        requiredFn: () => true,
                        visible: () => true,
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
                        disabledFn: () => true,
                        requiredFn: () => true,
                        visible: () => true,
                        hidden: false
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
                        requiredFn: () => false,
                        visible: () => true,
                        hidden: false
                    },
                    {
                        type: "text",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "id_cliente",
                        label: "CLIENTE",
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
                        hidden: false
                    },
                    {
                        type: "text",
                        colSize: "w-full md:w-6/12 lg:w-3/12",
                        key: "id_caja",
                        label: "CAJA",
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
                        hidden: false
                    }
                ]
            }
        }
    ]
};