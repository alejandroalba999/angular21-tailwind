export interface IMovimientoRegular {
  id_movreg: number;
  id_cotizacion: number;
  num_mov_regular: number;
  numversion: number;
  id_instruccion_operaciones: number | null;
  instruccion_operaciones: string | null;
  id_instruccion_operaciones_cliente: number | null;
  instruccion_operaciones_cliente: string | null;
  id_instruccion_ruta: number | null;
  instruccion_ruta: string | null;
  id_instruccion_ruta_cliente: number | null;
  instruccion_ruta_cliente: string | null;
  id_instruccion_seguridad: number | null;
  instruccion_seguridad: string | null;
  id_instruccion_gatas: number | null;
  instruccion_gatas: string | null;
  id_usuario_alta: string;
  ind_estado: string;
  fec_alta: string;
  id_proyecto: number;
  id_cliente_datosfiscales: number;
  rfc: string;
  clave_cliente: string;
  ind_tipo_persona: string;
  descripcion_ind_tipo_persona: string;
  ind_tipo_moneda: string;
  descripcion_ind_tipo_moneda: string;
  id_ubicacion_empaque_origen: number;
  cve_ubicacion_origen: string;
  es_empaque: string;
  id_ubicacion_empaque_destino: number;
  cve_ubicacion_destino: string;
  id_ruta_vacio_desde: number | null;
  id_ruta_vacio_hacia: number | null;
  clave_vacio_desde: string;
  clave_vacio_hacia: string;
  activo: number;
  id_tiposervicio: number;
  id_compania: number;
  nombre_cliente: string;
  nombre_corto_cliente: string;
  nombre_cliente_consolidado: string;
  tipo_servicio: string;
  desglosar_cpac: string;
  desglosar_cruce: string;
  desglosar_paradas_intermedias: string;
  desglosar_seguro_carga: string;
  desglosar_casetas: string;
  desglosar_gatas: string;
  facturar_cpac: string;
  id_unidad_medida_cpac: number | null;
  productos: string;
  producto_atributo: IProductoAtributo[];
  incluye_servicio_logistico: boolean;
  costo_servicio_logistico: number;
  servicios_logisticos: IServicioLogistico[];
  incluye_documento: boolean;
  documentos: IDocumento[];
  costos_extra: ICostosExtra[];
  cve_flete: string;
  ind_tiposervicio_facturacion: string;
  comentario: string | null;
  incluye_parada_intermedia: boolean;
  paradas_intermedias: IParadaIntermedia[];
  cotizacion: ICotizacion;
}

export interface ICotizacion {
  id_ruta: number;
  ind_zona: string;
  precio_cruce: number;
  ind_tipocarga: string;
  flete_neto: number;
  flete_frio: number;
  ind_moneda: string;
  iva: string;
  incluye_iva: boolean;
  deduccion: number;
  fec_vigencia_inicial: string;
  fec_vigencia_final: string;
  ind_tipo_cpac: string;
  distancia_cpac: number | null;
  importe_cpac: number;
  id_unidad_medida_cpac: number | null;
  seguro_carga: number;
  id_cruce: number | null;
  id_pais_frontera: number | null;
  id_estado_frontera: number | null;
  id_municipio_frontera: number | null;
  ind_tipo_gatas: string;
  num_gatas: number;
  importe_gatas: number;
  id_empleado_vendedor: number;
  nombre_empleado_vendedor: string;
  id_compania_vendedor: number;
  id_lineatras: number | null;
  id_tarifa_colocacion: number | null;
  flete_cpac_cruce: string;
  incluye_cruce: boolean;
  incluye_colocacion: boolean;
  incluye_seguro: boolean;
  ind_tipoferry: string;
  cve_region: string;
  kms_ruta: number;
  horas_ruta: number;
  incluye_gatas_flete: string;
}

export interface IProductoAtributo {

}

export interface IServicioLogistico {

}

export interface IDocumento {

}

export interface ICostosExtra {

}

export interface IParadaIntermedia {

}

export interface IResponseMovRegular {
  mov_regular: IMovimientoRegular[];
  total_registros: number;
}