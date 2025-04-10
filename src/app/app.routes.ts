import { Routes } from '@angular/router';
import { VitrineComponent } from './paginas/vitrine/vitrine.component';
import { DetalheComponent } from './paginas/detalhe/detalhe.component';
import { LoginComponent } from './paginas/login/login.component';

export const routes: Routes = [
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    {path:"detalhe/:id", component:DetalheComponent}
];