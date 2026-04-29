package com.example.demo.service;

import com.example.demo.model.Tournament;
import com.example.demo.repository.TournamentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TournamentService {

    private final TournamentRepository repository;

    public TournamentService(TournamentRepository repository) {
        this.repository = repository;
    }

    public Tournament createTournament(Tournament tournament) {
        return repository.save(tournament);
    }

    public List<Tournament> getAllTournaments() {
        return repository.findAll();
    }

    public Tournament updateTournament(Long id, Tournament updatedTournament) {
        Tournament tournament = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tournament not found with id: " + id));

        tournament.setTournamentName(updatedTournament.getTournamentName());
        tournament.setDivision(updatedTournament.getDivision());
        tournament.setLocation(updatedTournament.getLocation());
        tournament.setStartDate(updatedTournament.getStartDate());
        tournament.setEndDate(updatedTournament.getEndDate());

        return repository.save(tournament);
    }

    public void deleteTournament(Long id) {
        Tournament tournament = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tournament not found with id: " + id));

        repository.delete(tournament);
    }
}