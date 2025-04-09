import { Routes } from '@angular/router';
import { VitrineComponent } from './paginas/vitrine/vitrine.component';
import { LoginComponent } from './paginas/login/login.component';

export const routes: Routes = [
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent}
];