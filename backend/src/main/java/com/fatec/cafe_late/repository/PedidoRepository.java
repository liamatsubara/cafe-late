package com.fatec.cafe_late.repository;

import com.fatec.cafe_late.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
