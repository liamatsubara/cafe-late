package com.fatec.cafe_late.controller;

import com.fatec.cafe_late.entity.Pedido;
import com.fatec.cafe_late.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pedidos/")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    public Pedido criaPedido(@RequestBody Pedido pedido) throws Exception {
        return pedidoService.criar(pedido);
    }

    @GetMapping("{id}")
    public Pedido obterPedidoPorId(@PathVariable Long id) {
        return pedidoService.obterPedido(id);
    }

    @GetMapping
    public List<Pedido> obterPedidos() {
        return pedidoService.obterPedidos();
    }

    @PutMapping
    public Pedido atualizarPedido(Pedido pedido) {
        return pedidoService.atualizar(pedido);
    }

    @DeleteMapping
    public void deletePedido(Long id) {
        pedidoService.deletar(id);
    }
}
