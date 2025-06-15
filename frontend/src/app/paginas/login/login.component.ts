import { Component } from '@angular/core';
import { UsuarioService, Usuario } from '../../service/usuario.service';
import { TopBarComponent } from '../../componentes/top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  mensagemErro: string = '';
  mensagemSucesso: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  fazerLogin() {
    this.mensagemErro = '';
    this.mensagemSucesso = '';

    if (!this.email || !this.senha) {
      this.mensagemErro = 'Preencha todos os campos.';
      return;
    }

    const usuario: Usuario = { email: this.email, senha: this.senha };

    this.usuarioService.login(usuario).subscribe({
      next: (res) => {
        if (res.id) {
          this.mensagemSucesso = 'Login realizado com sucesso!';
          localStorage.setItem('usuarioLogado', JSON.stringify(res));
          setTimeout(() => this.router.navigate(['/']), 1500); // aguarda um pouco para mostrar mensagem
        } else {
          this.mensagemErro = 'Email ou senha inválidos.';
        }
      },
      error: () => {
        this.mensagemErro = 'Email ou senha inválidos.';
      }
    });
  }
}
