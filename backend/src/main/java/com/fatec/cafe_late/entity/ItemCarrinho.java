package com.fatec.cafe_late.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "item_pedido")
public class ItemCarrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private Long quantidade;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;

    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Carrinho carrinho;

    public ItemCarrinho() {}

    public ItemCarrinho(Long id, Long quantidade, Produto produto) {
        this.id = id;
        this.quantidade = quantidade;
        this.produto = produto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Long quantidade) {
        this.quantidade = quantidade;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public Carrinho getPedido() {
        return carrinho;
    }

    public void setPedido(Carrinho carrinho) {
        this.carrinho = carrinho;
    }
}