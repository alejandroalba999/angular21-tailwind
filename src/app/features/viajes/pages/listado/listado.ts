import { Component, inject, OnInit, signal} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterLink } from "@angular/router";
import { DynamicTable } from '../../../../shared/components/dynamic-table/dynamic-table';
import { TableColumn } from '../../../../shared/interfaces/dynamic-table.interface';
import { definirColumnas } from '../../models/temporal.model';
import { ViajesService } from '../../services/viajes';
import { IViaje } from '../../interfaces/viaje.interface';
import { LazyLoadEvent } from 'primeng/api';
import { TableState } from '../../../../shared/interfaces/lazyLoad.interface';
import { FeTitleComponent } from '../../../../shared/components/title/title';
@Component({
  selector: 'app-listado',
  imports: [
    ButtonModule, CardModule,
    RouterLink, DynamicTable, FeTitleComponent
  ],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado implements OnInit{
  cols: TableColumn[] = definirColumnas;
  viajes = signal<IViaje[]>([]);
  totalRegistros = signal<number>(0);
  filtrosGlobales: TableState = {
    first: 0,
    rows: 10
  }

  private readonly _viajesService = inject(ViajesService);
   
  ngOnInit(): void {
    this.obtenerListadoViaje(this.filtrosGlobales);
  }

  obtenerListadoViaje = (filtros: TableState) => {
    this._viajesService.obtenerListado(filtros).subscribe({
      next: (data) =>{
         this.viajes.set(data.viajes)
         this.totalRegistros.set(data.total_registros);
      }
    })
  }

  onLazyLoad(event: LazyLoadEvent) {
    this.viajes.set([]);
    this.filtrosGlobales.first = event.first || 0;
    this.filtrosGlobales.rows = event.rows || 10;
    this.obtenerListadoViaje(this.filtrosGlobales);
  }
}
