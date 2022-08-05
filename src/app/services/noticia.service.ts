import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  token: string = '1951b707753843f0be4cd00e0eb9e881';
  constructor(private htpp: HttpClient) {}

  /**
   * It returns an observable of type any, which is the result of the http.get() function
   * @param {any} parametros - any
   * @returns An observable
   */
  getNoticias(parametros: any): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=${this.token}`;
    return this.htpp.get(url);
  }
}
