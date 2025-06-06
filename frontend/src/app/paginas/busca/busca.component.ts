import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../service/produto.service';
import { Produto } from '../../model/produto';
import { CartaoProdutoComponent } from '../../componentes/cartao-produto/cartao-produto.component';
import { TopBarComponent } from "../../componentes/top-bar/top-bar.component";

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, CartaoProdutoComponent, TopBarComponent],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent implements OnInit{
  produtosFiltrados: Produto[] = [];
  termoBusca: string = '';

  // constructor(private route: ActivatedRoute, private produtoService: ProdutoService) {
  //   this.route.queryParams.subscribe(params => {
  //     this.termoBusca = (params['q'] || '').toLowerCase();

  //     const todosProdutos = this.produtoService.listar();
  //     this.produtosFiltrados = todosProdutos.filter(produto =>
  //       produto.nome.toLowerCase().includes(this.termoBusca) ||
  //       produto.descricao.toLowerCase().includes(this.termoBusca)
  //     );
  //   });
  // }
  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.termoBusca = (params['q'] || '').toLowerCase();

      const todosProdutos = this.produtoService.listar();
      this.produtosFiltrados = todosProdutos.filter(produto =>
        produto.nome.toLowerCase().includes(this.termoBusca) ||
        produto.descricao.toLowerCase().includes(this.termoBusca)
      );
    });
  }

}

