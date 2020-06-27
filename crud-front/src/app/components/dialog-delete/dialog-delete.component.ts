import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogDeleteComponent>,
    private produtoService:ProdutoService,
    @Inject(MAT_DIALOG_DATA) public data: string
    ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  deletar() {
    this.produtoService.deletar(this.data).subscribe(value => {
      if (value.status === 200) {
        this.dialogRef.close(value);
      }
    });
    
  }

}
