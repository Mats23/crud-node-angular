import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produto } from '../model/produto';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ResponseApi } from '../model/response-api';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private api = environment.url;
  private URL_PRODUTO = 'produto/';

  private payload: FormData;

  constructor(private http:HttpClient, private auth:AuthService) { }


  buscar(skip): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.api + this.URL_PRODUTO + '10/'+skip,{headers: this.configHeaders()});
  }
 

  file(produto: Produto) {
    this.payload = new FormData();
    this.payload.append('image', produto.imagem);
    this.payload.append('_id', produto._id);
    this.payload.append('nome', produto.nome);
    this.payload.append('preco', produto.preco.toString());

    return this.http.post<ResponseApi>(this.api + this.URL_PRODUTO , this.payload, {headers: this.configHeaders()}); 
  }


  deletar(id: string) {
    return this.http.delete<ResponseApi>(this.api + this.URL_PRODUTO+id,{headers: this.configHeaders()});
  }


  private configHeaders() {
    return  new HttpHeaders({Authorization: `Bearer ${this.auth.usuarioAtualValue.data.token}`});
  }
  
}
