import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './helper/auth.guartd';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'login', loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule)},
    {path: 'produto', loadChildren: () => import('../app/produto/produto.module').then(m => m.ProdutoModule), canActivate: [AuthGuard]}

]




@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }


