package com.example.demo.controller;

import com.example.demo.model.Tournament;
import com.example.demo.service.TournamentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tournaments")
@CrossOrigin(origins = "*")
public class TournamentController {

    private final TournamentService service;

    public TournamentController(TournamentService service) {
        this.service = service;
    }

    @PostMapping("/create")
    public Tournament createTournament(@RequestBody Tournament tournament) {
        return service.createTournament(tournament);
    }

    @GetMapping
    public List<Tournament> getAllTournaments() {
        return service.getAllTournaments();
    }

    @PutMapping("/update/{id}")
    public Tournament updateTournament(@PathVariable Long id, @RequestBody Tournament updatedTournament) {
        return service.updateTournament(id, updatedTournament);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTournament(@PathVariable Long id) {
        service.deleteTournament(id);
    }
}