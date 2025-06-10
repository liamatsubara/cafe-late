package com.fatec.cafe_late.service;

import com.fatec.cafe_late.entity.ItemCarrinho;
import com.fatec.cafe_late.entity.Carrinho;
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

    public Carrinho criarPedido(Carrinho carrinho) throws Exception {
        validarUsuario(carrinho.getUsuario());
        validarItens(carrinho.getItens());

        for (ItemCarrinho item : carrinho.getItens()) {
            item.setPedido(carrinho);
        }

        return pedidoRepository.save(carrinho);
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

    private void validarItens(List<ItemCarrinho> itens) throws Exception{
        if (itens == null || itens.isEmpty()) {
            throw new Exception("O pedido deve conter ao menos um item.");
        }

        for (ItemCarrinho item : itens) {
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

    public Carrinho obterPedido(Long id) {
        return pedidoRepository.findById(id).orElseThrow(() -> new RuntimeException("Pedido com id: " + id + " não encontrado!"));
    }

    public List<Carrinho> obterPedidos() {
        return pedidoRepository.findAll();
    }

    public Carrinho atualizar(Carrinho carrinho) throws Exception {
        if (!pedidoRepository.existsById(carrinho.getId())) {
            throw new Exception("Pedido com ID " + carrinho.getId() + " não encontrado.");
        }
        return pedidoRepository.save(carrinho);
    }

    public void deletar(Long id) throws Exception {
        if (!pedidoRepository.existsById(id)) {
            throw new Exception("Pedido com ID " + id + " não encontrado.");
        }
        pedidoRepository.deleteById(id);
    }
}