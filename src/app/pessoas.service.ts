import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './model';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private api = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any>(`${this.api}/pessoa`);
  }

  adicionar(pessoa: Pessoa): Observable<any> {
    return this.http.post<any>(`${this.api}/pessoa`, pessoa);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/pessoa/${id}`)
  }

  editar(id: number, pessoa: any): Observable<any> {
    return this.http.put<any>(`${this.api}/pessoa/${id}`, id, pessoa);
  }
}
