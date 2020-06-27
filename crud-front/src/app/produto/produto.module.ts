import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatBadgeModule, MatMenuModule, MatToolbarModule, MatTableModule, MatIconModule, MatGridListModule, MatDialogModule, MatPaginatorModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { HeaderComponent } from '../template/header/header.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { JwPaginationComponent, JwPaginationModule } from 'jw-angular-pagination';


@NgModule({
  declarations: [
    CadastroComponent,
    BuscarComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    CurrencyMaskModule,
    MatGridListModule,
    MatDialogModule,
    MatPaginatorModule,
    JwPaginationModule
    
  ]
})
export class ProdutoModule { }
