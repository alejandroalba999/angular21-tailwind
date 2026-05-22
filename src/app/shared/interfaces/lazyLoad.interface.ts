export interface TableState {
  first: number;
  rows: number;
  sortField?: string;
  sortOrder?: 1 | -1 | number;
  filters?: Record<string, any>;
}