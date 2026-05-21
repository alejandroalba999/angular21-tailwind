export interface TableColumn<T = any> {
  field: string;
  header: string;

  sortable?: boolean;

  width?: string;

  type?:
    | 'text'
    | 'date'
    | 'currency'
    | 'tag'
    | 'boolean'
    | 'custom';

  hidden?: boolean;

  tagSeverity?: (
    value: any,
    row: T
  ) =>
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'secondary'
    | 'contrast'

  formatter?: (value: any, row: T) => any;
}