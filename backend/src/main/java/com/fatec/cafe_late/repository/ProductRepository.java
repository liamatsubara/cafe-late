package com.fatec.cafe_late.repository;

import com.fatec.cafe_late.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
