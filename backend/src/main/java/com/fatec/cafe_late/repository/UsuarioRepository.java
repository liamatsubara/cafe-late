package com.fatec.cafe_late.repository;

import com.fatec.cafe_late.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
