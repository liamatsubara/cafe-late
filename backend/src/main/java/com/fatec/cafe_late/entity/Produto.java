package com.fatec.cafe_late.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "produto")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nome;
    private double preco;
    private String imagem;
    private String origem;
    private String descricao;
    private String peso;

    @OneToOne
    private PerfilSensorial perfilSensorial;

    public Produto(int id, String nome, double preco, String imagem, String origem, String descricao, String peso, PerfilSensorial perfilSensorial) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.imagem = imagem;
        this.origem = origem;
        this.descricao = descricao;
        this.peso = peso;
        this.perfilSensorial = perfilSensorial;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getOrigem() {
        return origem;
    }

    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getPeso() {
        return peso;
    }

    public void setPeso(String peso) {
        this.peso = peso;
    }

    public PerfilSensorial getPerfilSensorial() {
        return perfilSensorial;
    }

    public void setPerfilSensorial(PerfilSensorial perfilSensorial) {
        this.perfilSensorial = perfilSensorial;
    }
}
