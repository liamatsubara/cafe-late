import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true
})
export class NavbarComponent {
  menuAberto = false;

  constructor(private router: Router) {}

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