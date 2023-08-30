package com.mahasiswa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mahasiswa.model.Akun;
import com.mahasiswa.repository.AkunRepository;

@Service
public class AkunService {
    @Autowired
    AkunRepository akunRepository;

    // Get akun
    public Akun login(String username, String password) {
        return akunRepository.login(username, password);
    }
}
