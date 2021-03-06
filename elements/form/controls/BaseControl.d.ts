import { EventEmitter } from '@angular/core';
import { NovoControlGroupAddConfig } from '../ControlGroup';
export interface NovoGroupedControlConfig {
    label?: string;
    icon?: string;
    add?: NovoControlGroupAddConfig;
    remove?: boolean;
    key: string;
    initialValue?: {}[];
}
export interface NovoControlConfig {
    validators?: Array<any>;
    asyncValidators?: Array<any>;
    value?: any;
    key?: string;
    label?: string;
    checkboxLabel?: string;
    required?: boolean;
    hidden?: boolean;
    encrypted?: boolean;
    sortOrder?: number;
    controlType?: string;
    placeholder?: string;
    config?: any;
    dirty?: boolean;
    multiple?: boolean;
    headerConfig?: any;
    currencyFormat?: string;
    associatedEntity?: string;
    optionsType?: string;
    forceClear?: EventEmitter<any>;
    disabled?: boolean;
    maxlength?: number;
    minlength?: number;
    options?: Array<any>;
    type?: string;
    subType?: string;
    name?: string;
    readOnly?: boolean;
    closeOnSelect?: boolean;
    interactions?: Array<Object>;
    dataSpecialization?: string;
    appendToBody?: boolean;
    parentScrollSelector?: string;
    description?: string;
    tooltip?: string;
    tooltipPosition?: string;
    layoutOptions?: {
        order?: string;
        download?: boolean;
        edit?: boolean;
        customActions?: boolean;
        labelStyle?: string;
        draggable?: boolean;
        iconStyle?: string;
    };
    customControl?: any;
    customControlConfig?: any;
    military?: boolean;
    tipWell?: {
        tip: string;
        icon?: string;
        button?: boolean;
    };
    width?: number;
    startupFocus?: boolean;
}
export declare class BaseControl {
    __type: string;
    __config: NovoControlConfig;
    validators: Array<any>;
    asyncValidators?: Array<any>;
    value: any;
    key: string;
    label: string;
    checkboxLabel: string;
    required: boolean;
    hidden: boolean;
    encrypted: boolean;
    sortOrder: number;
    controlType: string;
    placeholder: string;
    config: any;
    dirty: boolean;
    multiple: boolean;
    headerConfig: any;
    currencyFormat: string;
    associatedEntity: string;
    optionsType: string;
    forceClear: EventEmitter<any>;
    maxlength: number;
    minlength: number;
    options: Array<any>;
    type: string;
    subType?: string;
    name: string;
    disabled: boolean;
    readOnly: boolean;
    closeOnSelect: boolean;
    interactions: Array<Object>;
    dataSpecialization: string;
    appendToBody: boolean;
    parentScrollSelector: string;
    description?: string;
    tooltip?: string;
    tooltipPosition?: string;
    layoutOptions?: {
        order?: string;
        download?: boolean;
        labelStyle?: string;
        draggable?: boolean;
        iconStyle?: string;
    };
    customControl?: any;
    customControlConfig?: any;
    military?: boolean;
    tipWell?: {
        tip: string;
        icon?: string;
        button?: boolean;
    };
    width: number;
    startupFocus?: boolean;
    constructor(type?: string, config?: NovoControlConfig);
}
