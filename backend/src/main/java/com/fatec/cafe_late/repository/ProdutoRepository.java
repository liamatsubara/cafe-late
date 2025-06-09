package com.fatec.cafe_late.repository;

import com.fatec.cafe_late.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
