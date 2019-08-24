package com.javainuse.controllers;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javainuse.model.horaires;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({ "/horaires" })
public class HorairesController {
    private List<horaires> horaires= createList();

    private List<com.javainuse.model.horaires> createList() {
        List<horaires> temphorHoraires = new ArrayList<>();
        horaires h = new horaires();
        h.setNumero("5");
        h.setOrigin("intileka");
        h.setDesignation("barçalona");
        h.setReseau("bus");
        h.setEtat("active");
        return temphorHoraires;

    }

}
