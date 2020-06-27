


import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BuscarComponent } from './buscar/buscar.component';


const routes: Routes = [
    { path: 'cadastro', component: CadastroComponent },
    { path: 'buscar', component: BuscarComponent },



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule {}
