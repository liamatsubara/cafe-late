import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: { produto: Produto, quantidade: number }[] = [];

  adicionarProduto(produto: Produto) {
    const itemExistente = this.itens.find(item => item.produto.id === produto.id);
    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }
  }

  listarItens() {
    return this.itens;
  }

  getTotal() {
    return this.itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
  }

  limparCarrinho(): void {
    this.itens = [];
  }
}
