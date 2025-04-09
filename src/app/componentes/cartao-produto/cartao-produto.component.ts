import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao-produto',
  imports: [],
  templateUrl: './cartao-produto.component.html',
  styleUrl: './cartao-produto.component.css'
})

export class CartaoProdutoComponent {
  @Input() nome!: string;
  @Input() preco!: number;
  @Input() imagem!: string;
}

