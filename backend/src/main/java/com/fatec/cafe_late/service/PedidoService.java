package com.fatec.cafe_late.service;

import com.fatec.cafe_late.entity.Pedido;
import com.fatec.cafe_late.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public Pedido criar(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    public Pedido obterPedido(Long id) {
        return pedidoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pedido com id: " + id + " não encontrado!"));
    }

    public List<Pedido> obterPedidos() {
        return pedidoRepository.findAll();
    }

    public Pedido atualizar(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    public void deletar(Long id) {
        pedidoRepository.deleteById(id);
    }
}
