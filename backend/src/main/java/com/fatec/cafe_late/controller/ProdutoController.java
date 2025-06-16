package com.fatec.cafe_late.controller;

import com.fatec.cafe_late.entity.Produto;
import com.fatec.cafe_late.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProdutoController {

    @Autowired
    ProdutoService produtoService;

    @PostMapping
    public ResponseEntity<Produto> cadastrar(@RequestBody Produto produto){
        Produto novoProduto = produtoService.cadastrar(produto);
        return ResponseEntity.ok(novoProduto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> carregar(@PathVariable Long id){
        Produto produto = produtoService.carregar(id);
        if (produto != null) {
            return ResponseEntity.ok(produto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Produto>> retornaLista() {
        return ResponseEntity.ok(produtoService.retornaLista());
    }

    @PutMapping
    public ResponseEntity<Produto> alterar(@RequestBody Produto produto) {
        Produto atualizado = produtoService.alterar(produto);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        produtoService.deletarProduto(id);
        return ResponseEntity.noContent().build();
    }
}