import { Component } from '@angular/core';
import { TopBarComponent } from '../../componentes/top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TopBarComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  fazerLogin() {
    if (this.email && this.senha) {
      alert(`Login realizado com sucesso!\nEmail: ${this.email}`);
    } else {
      alert('Preencha todos os campos.');
    }
  }
}
