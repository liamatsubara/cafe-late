package com.fatec.cafe_late.service;

import com.fatec.cafe_late.entity.Usuario;
import com.fatec.cafe_late.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public Usuario cadastrar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario carregar(Long id) {
        if (id != null) {
            return usuarioRepository.findById(id).orElse(null);
        }
        return null;
    }

    public List<Usuario> retornaLista() {
        return usuarioRepository.findAll();
    }

    public Usuario alterar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public void deletarUsuario(Long id) {
        usuarioRepository.findById(id).ifPresent(usuario -> usuarioRepository.delete(usuario));
    }

    public Usuario fazerLogin(Usuario usuario) {
        Optional<Usuario> retorno = usuarioRepository.login(usuario.getEmail(), usuario.getSenha());
        if (retorno.isPresent()){
            return retorno.get();
        } else {
            return new Usuario();
        }
    }
}
