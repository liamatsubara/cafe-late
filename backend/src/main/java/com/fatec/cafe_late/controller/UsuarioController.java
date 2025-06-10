package com.fatec.cafe_late.controller;

import com.fatec.cafe_late.entity.Usuario;
import com.fatec.cafe_late.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping()
    public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario usuario){
        Usuario novoUsuario = usuarioService.cadastrar(usuario);
        return ResponseEntity.ok(novoUsuario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> carregar(@PathVariable Long id){
        Usuario usuario = usuarioService.carregar(id);
        if (usuario != null) {
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> retornaLista() {
        return ResponseEntity.ok(usuarioService.retornaLista());
    }

    @PutMapping
    public ResponseEntity<Usuario> alterar(@RequestBody Usuario usuario) {
        Usuario atualizado = usuarioService.alterar(usuario);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        usuarioService.deletarUsuario(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody Usuario usuario) {
        Usuario resultado = usuarioService.fazerLogin(usuario);
        if (resultado.getId() != null) {
            return ResponseEntity.ok(resultado);
        } else {
            return ResponseEntity.status(401).build();
        }
    }

}
