import { Component } from '@angular/core';
import { TopBarComponent } from '../../componentes/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  imports: [TopBarComponent, CommonModule, FormsModule],
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.css'
})
export class EsqueciSenhaComponent {
  email: string = '';

  enviarEmail() {
    if (this.email) {
      alert(`Um link de recuperação foi enviado para: ${this.email}`);
    } else {
      alert('Informe o email para recuperação.');
    }
  }
}
