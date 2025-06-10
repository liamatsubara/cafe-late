package com.fatec.cafe_late.service;

import com.fatec.cafe_late.entity.ItemPedido;
import com.fatec.cafe_late.entity.Pedido;
import com.fatec.cafe_late.entity.Produto;
import com.fatec.cafe_late.entity.Usuario;
import com.fatec.cafe_late.repository.PedidoRepository;
import com.fatec.cafe_late.repository.ProdutoRepository;
import com.fatec.cafe_late.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Pedido criarPedido(Pedido pedido) throws Exception {
        validarUsuario(pedido.getUsuario());
        validarItens(pedido.getItens());

        for (ItemPedido item : pedido.getItens()) {
            item.setPedido(pedido);
        }

        return pedidoRepository.save(pedido);
    }

    private void validarUsuario(Usuario usuario)  throws Exception{
        if (usuario == null || usuario.getId() == null) {
            throw new Exception("Usuário do pedido é obrigatório.");
        }

        boolean existe = usuarioRepository.existsById(usuario.getId());
        if (!existe) {
            throw new Exception("Usuário não encontrado com ID: " + usuario.getId());
        }
    }

    private void validarItens(List<ItemPedido> itens) throws Exception{
        if (itens == null || itens.isEmpty()) {
            throw new Exception("O pedido deve conter ao menos um item.");
        }

        for (ItemPedido item : itens) {
            if (item.getProduto() == null || item.getProduto().getId() == null) {
                throw new Exception("Produto do item do pedido é obrigatório.");
            }

            Produto produto = produtoRepository.findById(item.getProduto().getId())
                    .orElseThrow(() -> new Exception("Produto não encontrado com ID: " + item.getProduto().getId()));

            if (item.getQuantidade() == null || item.getQuantidade() <= 0) {
                throw new Exception("Quantidade inválida para o produto " + produto.getNome());
            }
        }
    }

    public Pedido obterPedido(Long id) {
        return pedidoRepository.findById(id).orElseThrow(() -> new RuntimeException("Pedido com id: " + id + " não encontrado!"));
    }

    public List<Pedido> obterPedidos() {
        return pedidoRepository.findAll();
    }

    public Pedido atualizar(Pedido pedido) throws Exception {
        if (!pedidoRepository.existsById(pedido.getId())) {
            throw new Exception("Pedido com ID " + pedido.getId() + " não encontrado.");
        }
        return pedidoRepository.save(pedido);
    }

    public void deletar(Long id) throws Exception {
        if (!pedidoRepository.existsById(id)) {
            throw new Exception("Pedido com ID " + id + " não encontrado.");
        }
        pedidoRepository.deleteById(id);
    }
}