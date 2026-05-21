import { Component, inject, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DynamicTable } from '../../../../shared/components/dynamic-table/dynamic-table';
import { RouterLink } from '@angular/router';
import { TableColumn } from '../../../../shared/interfaces/dynamic-table.interface';
import { FeTitleComponent } from '../../../../shared/components/title/title';
import { MovimientoRegularService } from '../../services/movRegular';
import { definirColumnas } from '../../models/temporal.model';
import { LazyLoadEvent } from 'primeng/api';
import { TableState } from '../../../../shared/interfaces/lazyLoad.interface';

@Component({
  selector: 'app-listado',
  imports: [
    CardModule, ButtonModule,
    DynamicTable, RouterLink, FeTitleComponent
  ],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado implements OnInit {

  private readonly _movRegularService = inject(MovimientoRegularService);

  cols: TableColumn[] = definirColumnas;
  movRegulares = signal<any[]>([]);
  totalRegistros = signal<number>(0);
  filtrosGlobales: TableState = {
    first: 0,
    rows: 10
  }

  ngOnInit(): void {
    this.obtenerListadoMovRegular(this.filtrosGlobales);
  }

  obtenerListadoMovRegular = (filtros: TableState) => {
    this._movRegularService.obtenerListado(filtros).subscribe({
      next: (data: { mov_regular: any[], total_registros: number }) => {
        this.movRegulares.set(data.mov_regular)
        this.totalRegistros.set(data.total_registros);
      }
    })
  }

  onLazyLoad(event: LazyLoadEvent) {
    this.movRegulares.set([]);
    this.filtrosGlobales.first = event.first || 0;
    this.filtrosGlobales.rows = event.rows || 10;
    this.obtenerListadoMovRegular(this.filtrosGlobales);
  }

}
