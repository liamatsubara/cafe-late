import { Routes } from '@angular/router';
import { VitrineComponent } from './paginas/vitrine/vitrine.component';
import { DetalheComponent } from './paginas/detalhe/detalhe.component';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { BuscaComponent } from './paginas/busca/busca.component';
import { CarrinhoComponent } from './paginas/carrinho/carrinho.component';
import { EsqueciSenhaComponent } from './paginas/esqueci-senha/esqueci-senha.component';

export const routes: Routes = [
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    {path:"detalhe/:id", component:DetalheComponent},
    {path:"cadastro", component:CadastroComponent},
    {path: 'busca', component: BuscaComponent },
    {path: 'carrinho', component: CarrinhoComponent },
    {path: 'esqueci-senha', component:EsqueciSenhaComponent}
];