package com.fatec.cafe_late.repository;

import com.fatec.cafe_late.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
