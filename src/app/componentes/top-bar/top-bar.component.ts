import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() title: string = ''; // Recebe o título vindo da página

  constructor(private location: Location) {}

  // Método chamado ao clicar no "voltar"
  goBack(): void {
    this.location.back(); // Faz voltar para a página anterior
  }
}
