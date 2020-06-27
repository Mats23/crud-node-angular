import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '../model/response';


@Injectable({
  providedIn: 'root'
})
export class AuthService{
  api = environment.url;
  private LOGIN_URL = 'login'
  private usuarioSubject: BehaviorSubject<Response>;
  usuarioAtual: Observable<Response>;
  
  
  constructor(private http:HttpClient) { 
    this.usuarioSubject = new BehaviorSubject<Response>(JSON.parse(localStorage.getItem('usuarioAtual')));
    this.usuarioAtual = this.usuarioSubject.asObservable();
  }


  public get usuarioAtualValue(): Response {
    return this.usuarioSubject.value;
  }

  logar(usuario:Usuario) {
    console.log(usuario);
    return this.http.post<Response>(this.api + this.LOGIN_URL,usuario)
        .pipe(map((response:Response) => {
          console.log(response);
          if(response && response.data.token) {
            localStorage.setItem('usuarioAtual', JSON.stringify(response));
            this.usuarioSubject.next(response);
          }
          return response;
        }));
  }

  
}
