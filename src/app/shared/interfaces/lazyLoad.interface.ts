export interface TableState {
  first: number;
  rows: number;
  sortField?: string;
  sortOrder?: 1 | -1;
  filters?: Record<string, any>;
}