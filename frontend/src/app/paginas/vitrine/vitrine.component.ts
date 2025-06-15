import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartaoProdutoComponent } from '../../componentes/cartao-produto/cartao-produto.component';
import { Produto } from '../../model/produto';
import { Router } from '@angular/router';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule, CartaoProdutoComponent],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})

export class VitrineComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.listar().subscribe((res: Produto[]) => {
      this.produtos = res;
    });
  }
}