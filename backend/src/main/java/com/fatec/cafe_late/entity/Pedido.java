package com.fatec.cafe_late.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "pedido")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
    private List<ItemPedido> itens;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    public Pedido() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<ItemPedido> getItens() {
        return itens;
    }

    public void setItens(List<ItemPedido> itens) {
        this.itens = itens;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public double calcularValorTotal() {
        if (itens == null) return 0.0;

        return itens.stream()
                .mapToDouble(item -> {
                    Produto produto = item.getProduto();
                    Double preco = produto != null ? produto.getPreco() : null;
                    Long quantidade = item.getQuantidade();

                    if (preco == null || quantidade == null) {
                        return 0.0;
                    }

                    return preco * quantidade;
                })
                .sum();
    }
}