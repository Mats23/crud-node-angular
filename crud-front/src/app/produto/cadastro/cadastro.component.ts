import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  value;
  fileUpload: File
  formCadastro: FormGroup;
  nomeFile:string;


  constructor(
     private formBuilder: FormBuilder,
     private produtoService: ProdutoService,
     private route:Router,
     public dialog: MatDialog
     ) { }

  ngOnInit() {
    this.form();
  }

  form() {
    this.formCadastro = this.formBuilder.group({
      inputNome:[''],
      inputPreco: [''],
      inputFile: ['']

    })
  }

  file(files: FileList) {
    this.fileUpload = files.item(0);
    this.nomeFile = this.fileUpload.name;

  }

  cadastrar() {
    const produto = new Produto();
    produto.nome = this.formCadastro.get('inputNome').value;
    produto.preco = this.formCadastro.get('inputPreco').value;
    produto.imagem = this.fileUpload;
    this.produtoService.file(produto).subscribe(retorno => {
 
      if (retorno.status === 200) {
        this.route.navigate(['produto','buscar']);

      } else {
        this.openDialog();

      }
    });
  } 
 
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
