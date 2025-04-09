import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartaoProdutoComponent } from '../../componentes/cartao-produto/cartao-produto.component';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule, CartaoProdutoComponent],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})

export class VitrineComponent {
  produtos = [
    { nome: 'Reserva Caramelo', preco: 52.00, imagem: '/produtos/produto1.png' },
    { nome: 'Bulldogue Bourbon', preco: 52.00, imagem: 'produtos/produto2.png' },
    { nome: 'Cerrado Pastor', preco: 52.00, imagem: 'produtos/produto3.png' },
    { nome: 'Golden Sul de Minas', preco: 49.00, imagem: 'produtos/produto4.png' },
    { nome: 'Mogiana Labrador', preco: 49.00, imagem: 'produtos/produto5.png' },
    { nome: 'Terrier da Mantiqueira', preco: 49.00, imagem: 'produtos/produto6.png' },
  ];
}