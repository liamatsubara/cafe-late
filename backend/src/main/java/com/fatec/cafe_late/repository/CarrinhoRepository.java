package com.fatec.cafe_late.repository;

import com.fatec.cafe_late.entity.Carrinho;
import org.springframework.data.jpa.repository.JpaRepository;
public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {
}
