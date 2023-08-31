package com.mahasiswa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mahasiswa.model.Akun;
import com.mahasiswa.service.AkunService;

@RestController
@CrossOrigin
public class AkunController {
    @Autowired
    AkunService akunService;

    @PostMapping("/login")
    public Akun login(@RequestParam String username, @RequestParam String password) {
        return akunService.login(username, password);
    }

}
