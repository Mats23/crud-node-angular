import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatTableDataSource, PageEvent, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { Observable, observable, of, Subject } from 'rxjs';
import { DialogDeleteComponent } from 'src/app/components/dialog-delete/dialog-delete.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  dataSource = new MatTableDataSource<Produto>();
  displayedColumns: string[] = ['nome','preco', 'deletar'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [10];
  pageEvent: PageEvent;
  skip = 0;
  @ViewChild('pag',{static: true})
  paginator: MatPaginator;
  produtos: Produto[] = [];


  constructor(
    private produtoService: ProdutoService,
    private router:Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.buscarProdutos();
    
    
  }
  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '300px',
      data: id
    });

    dialogRef.afterClosed().subscribe(({data}) => {
         const prod = this.produtos.filter(a => a._id !== data._id);
         this.dataSource.data = prod;
    
    });
  }


  buscarProdutos() {
    this.produtoService.buscar(this.skip).subscribe(({data, total}) => {
      if (data.length > 0) {
        if (this.produtos.length !== total) {
          data.map(val => this.produtos.push(val));
          this.dataSource.data = this.produtos;
          this.dataSource.paginator = this.paginator;
          this.dataSource._updatePaginator(total);
        }
   

      }
    });

  }


  deletar(produto: Produto) {
    this.openDialog(produto._id);
  }

  onPageChange(event: PageEvent){

    if (event.previousPageIndex < event.pageIndex) {
      this.skip +=10;
      this.buscarProdutos();

    } else {
      this.skip -=10;
      this.buscarProdutos();
    }
   
    
   
   }
}
