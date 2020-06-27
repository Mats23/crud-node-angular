import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  navBuscar() {
    this.router.navigate(['produto','buscar']);

  }
  navCadastro() {
    this.router.navigate(['produto','cadastro']);

  }

}
