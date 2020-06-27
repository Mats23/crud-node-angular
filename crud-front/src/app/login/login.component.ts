import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService,private route:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form()
  }

  form() {
    this.loginForm = this.formBuilder.group({
      loginInput: [''],
      senhaInput: ['']
    });
    
    
  }

  logar() {
    const usuario = new Usuario();
    usuario.nome = this.loginForm.get('loginInput').value;
    usuario.senha = this.loginForm.get('senhaInput').value;
    this.authService.logar(usuario).subscribe(retorno =>  {
      console.log(retorno);
      this.route.navigate(['produto', 'cadastro']);
    });
  }

}
