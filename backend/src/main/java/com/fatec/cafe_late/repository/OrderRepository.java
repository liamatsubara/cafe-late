package com.fatec.cafe_late.repository;

import com.fatec.cafe_late.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
