import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IResponseViaje } from '../interfaces/viaje.interface';
import { TableState } from '../../../shared/interfaces/lazyLoad.interface';

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.url_api_despacho}viajes`;
  private readonly idCompania = environment.id_compania;

  obtenerListado(filtros: TableState): Observable<IResponseViaje> {
    return this.http.post<any>(`${this.apiUrl}/compania/${this.idCompania}`,filtros);
  }
}
