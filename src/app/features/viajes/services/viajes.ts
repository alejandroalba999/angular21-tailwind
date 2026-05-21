import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.url_api_despacho}viajes`;
  private readonly idCompania = environment.id_compania;

  obtenerListado(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/compania/${this.idCompania}`,
      {
        "first": 0,
        "rows": 10,
        "sortField": "id_viaje",
        "sortOrder": "DESC",
        "filters": {

        },
        "globalFilter": null,
        "paginacion": 1
      });
  }
}
