import { Produto } from './produto';

export interface Carrinho {
  id?: number;
  itens: {
    produto: Produto;
    quantidade: number;
  }[];
  total?: number;
}