import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: number;
  nome?: string;
  email: string;
  senha: string;
  cpf?: string;
  telefone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) {}

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API}`, usuario);
  }

  login(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API}/login`, usuario);
  }

  listar(usuario: Usuario): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API);
  }

  atualizar(id: number, usuario: Usuario): Observable<Usuario> {
      return this.http.put<Usuario>(`${this.API}/${id}`, usuario);
  }
  
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
