import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const usuarioAtual = this.authService.usuarioAtualValue;
        const logado = usuarioAtual && usuarioAtual.data.token;
        const api = request.url.startsWith(environment.url);
        if (logado && api) {
            request = request.clone({
                setHeaders: {
                    Authorization:  `Bearer ${usuarioAtual.data.token}`
                }
            })
        }

        return next.handle(request);
    }
}