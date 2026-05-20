import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { TableColumn } from '../../interfaces/dynamic-table.interface';

@Component({
  selector: 'fe-dynamic-table',
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule
  ],
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.css',
})
export class DynamicTable {

  @Input({ required: true })
  data: any[] = [];

  @Input({ required: true })
  columns: TableColumn[] = [];

  @Input()
  loading = false;

  @Input()
  paginator = true;

  @Input()
  rows = 10;

  @Input()
  totalRecords = 0;

  @Input()
  lazy = false;

  @Output()
  lazyLoad = new EventEmitter<any>();

  @Output()
  rowSelect = new EventEmitter<any>();

  getValue(row: any, field: string) {
    return row[field];
  }

}
