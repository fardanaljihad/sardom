package com.mahasiswa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mahasiswa.model.Akun;

public interface AkunRepository extends JpaRepository<Akun, String> {
    @Query("SELECT a FROM Akun a WHERE a.username= :username AND a.password= :password")
    Akun login(@Param("username") String username, @Param("password") String password);
}
