package com.fatec.cafe_late.repository;

import com.fatec.cafe_late.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    @Query(value = "select * from usuario where email=?1 and senha=?2", nativeQuery = true)
    Optional<Usuario> login(String email, String senha);
}
