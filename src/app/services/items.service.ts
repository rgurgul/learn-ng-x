import { Api } from './../shared/utils/api';
import { HttpServiceModel } from './../shared/utils/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements HttpServiceModel {

  constructor(
    private http: HttpClient
  ) { }

  fetch(filters?: { [key: string]: any; }): Observable<any> {
    return this.http.get(Api.DATA_ITEMS, { params: filters })
  }
  get(id: string): Observable<any> {
    return this.http.get(Api.DATA_ITEMS + "/" + id)
  }
  add(item: any): Observable<any> {
    return this.http.post(Api.DATA_ITEMS, item)
  }
  update(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${Api.DATA_ITEMS}/${id}`);
  }
}
