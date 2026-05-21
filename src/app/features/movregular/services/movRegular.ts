import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { TableState } from '../../../shared/interfaces/lazyLoad.interface';
import { IResponseMovRegular } from '../interfaces/movRegular.interface';

@Injectable({
  providedIn: 'root',
})
export class MovimientoRegularService {
   private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.url_api_despacho}movimientos-regulares`;
  private readonly idCompania = environment.id_compania;

  obtenerListado(filtros: TableState): Observable<IResponseMovRegular> {
    return this.http.post<IResponseMovRegular>(`${this.apiUrl}/compania/${this.idCompania}`,filtros);
  }
}
