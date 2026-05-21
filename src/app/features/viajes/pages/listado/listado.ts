import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterLink } from "@angular/router";
import { DynamicTable } from '../../../../shared/components/dynamic-table/dynamic-table';
import { TableColumn } from '../../../../shared/interfaces/dynamic-table.interface';
import { data, definirColumnas } from '../../models/temporal.model';
import { ViajesService } from '../../services/viajes';
@Component({
  selector: 'app-listado',
  imports: [ButtonModule, CardModule, RouterLink, DynamicTable],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado implements OnInit{
  cols: TableColumn[] = definirColumnas;
  viajes = data;

  private readonly _viajesService = inject(ViajesService);
   
  ngOnInit(): void {
    this.obtenerListadoViaje();
  }

  obtenerListadoViaje = () => {
    this._viajesService.obtenerListado().subscribe({
      next: (data) => console.log(data)
    })
  }
}
