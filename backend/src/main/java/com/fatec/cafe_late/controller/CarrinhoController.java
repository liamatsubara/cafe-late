package com.fatec.cafe_late.controller;

import com.fatec.cafe_late.entity.Carrinho;
import com.fatec.cafe_late.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carrinho")
@CrossOrigin(origins = "http://localhost:4200")
public class CarrinhoController {

    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    public ResponseEntity<Void> criaPedido(@RequestBody Carrinho carrinho) {
        try {
            pedidoService.criarPedido(carrinho);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Carrinho> obterPedidoPorId(@PathVariable Long id) {
        Carrinho carrinho = pedidoService.obterPedido(id);
        if (carrinho != null) {
            return ResponseEntity.ok(carrinho);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Carrinho>> obterPedidos() {
        List<Carrinho> carrinhos = pedidoService.obterPedidos();
        return ResponseEntity.ok(carrinhos);
    }

    @PutMapping
    public ResponseEntity<Carrinho> atualizarPedido(@RequestBody Carrinho carrinho) {
        try {
            Carrinho atualizado = pedidoService.atualizar(carrinho);
            return ResponseEntity.ok(atualizado);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePedido(@PathVariable Long id) {
        try {
            pedidoService.deletar(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}