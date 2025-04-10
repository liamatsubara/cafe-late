import { Routes } from '@angular/router';
import { VitrineComponent } from './paginas/vitrine/vitrine.component';
import { DetalheComponent } from './paginas/detalhe/detalhe.component';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';

export const routes: Routes = [
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    {path:"detalhe", component:DetalheComponent},
    {path:"cadastro", component:CadastroComponent}
];