export interface DynamicFormConfig {
    titulo: string;
    icono?: string;

    identificador?: string | null;

    labelCamposRequeridos?: boolean;

    botonesHeader?: DynamicButton[];
    botonesFooter?: DynamicButton[];

    formularios: DynamicSubForm[];
}

export interface DynamicSubForm {
    titulo: string;

    icono?: string;

    identificador?: string | null;

    formulario: {
        fields: DynamicField[];
    };

    botonesHeader?: DynamicButton[];
    botonesFooter?: DynamicButton[];
}

export interface DynamicField {
    key: string;

    minLength: number;

    maxLength: number;

    min: number;

    max: number;

    pattern: string;

    defaultValue: unknown;

    disabledFn: (
    formValue: any
  ) => boolean;

    requiredFn: Function;

    visible: Function;

    hidden: boolean;

    type:
    | 'text'
    | 'number'
    | 'date'
    | 'select'
    | 'textarea'
    | 'checkbox'
    | 'radio';

    label: string;

    placeholder?: string;

    required?: boolean;

    disabled?: boolean;

    colSize?: string;

    options?: DynamicOption[];

    validators?: ValidatorFn[];
}

import { ValidatorFn } from '@angular/forms';

export interface DynamicButton {
    label: string;

    icon?: string;

    severity?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warn'
    | 'help'
    | 'danger'
    | 'contrast';

    outlined?: boolean;

    text?: boolean;

    rounded?: boolean;

    raised?: boolean;

    disabled?: boolean;

    loading?: boolean;

    visible?: boolean;

    tooltip?: string;

    class?: string;

    action?: string;

    onClick?: () => void;
}

export interface DynamicOption<T = any> {
    label: string;

    value: T;

    disabled?: boolean;

    icon?: string;
}