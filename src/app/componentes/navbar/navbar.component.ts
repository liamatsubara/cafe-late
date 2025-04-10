import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true
})
export class NavbarComponent {
  constructor(private router: Router) {}

  buscarProduto(event: Event, input: HTMLInputElement) {
    event.preventDefault();
    const termo = input.value.trim();
    if (termo) {
      this.router.navigate(['/busca'], { queryParams: { q: termo } });
    }
  }
}
