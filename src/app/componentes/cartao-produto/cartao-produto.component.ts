import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao-produto',
  imports: [],
  templateUrl: './cartao-produto.component.html',
  styleUrl: './cartao-produto.component.css',
  standalone: true
})

export class CartaoProdutoComponent {
  @Input() id!: number;
  @Input() nome!: string;
  @Input() preco!: number;
  @Input() imagem!: string;

  constructor(private router: Router) {}

  irParaDetalhe() {
    this.router.navigate(['/detalhe', this.id]);
  }
}