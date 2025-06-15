import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService, Usuario } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { TopBarComponent } from '../../componentes/top-bar/top-bar.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, TopBarComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmaSenha = '';
  cpf: string = '';
  telefone: string = '';
  mensagem: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  cadastrar() {
    if (!this.nome || !this.email || !this.senha) {
      this.mensagem = 'Preencha os campos obrigatórios.';
      return;
    }

    const novoUsuario: Usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      cpf: this.cpf,
      telefone: this.telefone
    };

    this.usuarioService.cadastrar(novoUsuario).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: () => {
        this.mensagem = 'Erro ao realizar o cadastro.';
      }
    });
  }
}
