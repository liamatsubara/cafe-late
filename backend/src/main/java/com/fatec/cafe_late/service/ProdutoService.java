package com.fatec.cafe_late.service;

import com.fatec.cafe_late.entity.Produto;
import com.fatec.cafe_late.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    ProdutoRepository produtoRepository;

    public Produto cadastrar(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto carregar(Long id) {
        if (id != null) {
            return produtoRepository.findById(id).orElse(null);
        }
        return null;
    }

    public List<Produto> retornaLista() {
        return produtoRepository.findAll();
    }

    public Produto alterar(Produto produto) {
        return produtoRepository.save(produto);
    }

    public void deletarProduto(Long id) {
        produtoRepository.findById(id).ifPresent(produto -> produtoRepository.delete(produto));
    }

}
