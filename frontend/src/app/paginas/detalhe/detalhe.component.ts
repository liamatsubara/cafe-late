import { Component } from '@angular/core';
import { TopBarComponent } from "../../componentes/top-bar/top-bar.component";
import { Produto } from '../../model/produto';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../service/produto.service';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../service/carrinho.service';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule, TopBarComponent],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  public produto!: Produto;
  public mensagem: string = "";

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService.buscarPorId(id).subscribe({
      next: (encontrado) => {
        if (encontrado) {
          this.produto = encontrado;
        } else {
          this.mensagem = "Produto não encontrado!";
        }
      },
      error: () => {
        this.mensagem = "Erro ao buscar o produto!";
      }
    });
  }

  comprar() {
    if (this.produto) {
      this.carrinhoService.adicionarProduto(this.produto);
      alert('Produto adicionado ao carrinho!');
    }
  }
}
