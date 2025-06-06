import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../../service/carrinho.service'; // ajuste o caminho se necessário
import { Produto } from '../../model/produto';

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

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {}

  irParaDetalhe() {
    this.router.navigate(['/detalhe', this.id]);
  }

  comprar() {
    const produto: Produto = {
      id: this.id,
      nome: this.nome,
      preco: this.preco,
      imagem: this.imagem,
      descricao: '',
      origem: '',
      peso: '',
      perfilSensorial: {
        variedade: '',
        processo: '',
        altitude: '',
        torra: '',
        corpo: '',
        acidez: '',
        docura: '',
        idealPara: ''
      }
    };

    this.carrinhoService.adicionarProduto(produto);
    alert('Produto adicionado ao carrinho!');
  }
}
