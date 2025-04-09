import { Routes } from '@angular/router';
import { VitrineComponent } from './paginas/vitrine/vitrine.component';
import { DetalheComponent } from './paginas/detalhe/detalhe.component';

export const routes: Routes = [
    {path:"", component:VitrineComponent},
    {path:"detalhe", component:DetalheComponent},
];