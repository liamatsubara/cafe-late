import { Component } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from "../../componentes/top-bar/top-bar.component";

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, TopBarComponent],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  constructor(public carrinhoService: CarrinhoService) {}

  limpar() {
    this.carrinhoService.limparCarrinho();
  }

  finalizar() {
    alert('Compra finalizada com sucesso!');
    this.limpar();
  }
}
