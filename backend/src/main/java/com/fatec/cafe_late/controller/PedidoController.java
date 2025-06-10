package com.fatec.cafe_late.controller;

import com.fatec.cafe_late.entity.Pedido;
import com.fatec.cafe_late.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pedidos")
@CrossOrigin(origins = "http://localhost:4200")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    public ResponseEntity<Pedido> criaPedido(@RequestBody Pedido pedido) {
        try {
            Pedido criado = pedidoService.criarPedido(pedido);
            return ResponseEntity.status(200).body(criado);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> obterPedidoPorId(@PathVariable Long id) {
        Pedido pedido = pedidoService.obterPedido(id);
        if (pedido != null) {
            return ResponseEntity.ok(pedido);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Pedido>> obterPedidos() {
        List<Pedido> pedidos = pedidoService.obterPedidos();
        return ResponseEntity.ok(pedidos);
    }

    @PutMapping
    public ResponseEntity<Pedido> atualizarPedido(@RequestBody Pedido pedido) {
        try {
            Pedido atualizado = pedidoService.atualizar(pedido);
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