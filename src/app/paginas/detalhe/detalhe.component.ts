import { Component } from '@angular/core';
import { TopBarComponent } from "../../componentes/top-bar/top-bar.component";
import { Produto } from '../../model/produto';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../service/produto.service';
import { CommonModule } from '@angular/common';

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
    private produtoService: ProdutoService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const encontrado = this.produtoService.buscarPorId(id);

    if (encontrado) {
      this.produto = encontrado;
    } else {
      this.mensagem = "Produto não encontrado!";
    }
  }
}
