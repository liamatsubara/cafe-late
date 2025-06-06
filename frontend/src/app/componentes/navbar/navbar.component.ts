import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true
})
export class NavbarComponent {
  menuAberto = false;

  termoBusca: string = '';
  termoBuscaMobile: string = '';

  constructor(private router: Router) {}

  buscarDesktop(event: Event) {
    event.preventDefault();
    this.router.navigate(['/busca'], { queryParams: { q: this.termoBusca } });
  }

  buscarMobile(event: Event) {
    event.preventDefault();
    this.router.navigate(['/busca'], { queryParams: { q: this.termoBuscaMobile } });
    this.toggleMenu();
  }

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }
  
  buscarProduto(event: Event, input: HTMLInputElement) {
    event.preventDefault();
    const termo = input.value.trim();
    if (termo) {
      this.router.navigate(['/busca'], { queryParams: { q: termo } });
    }
  }
}