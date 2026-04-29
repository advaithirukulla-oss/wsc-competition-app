package com.example.demo.service;

import com.example.demo.model.DebateMatch;
import com.example.demo.model.DebateLeaderboardEntry;
import com.example.demo.repository.DebateMatchRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DebateMatchService {

    private final DebateMatchRepository repository;

    public DebateMatchService(DebateMatchRepository repository) {
        this.repository = repository;
    }

    public DebateMatch create(DebateMatch match) {
        return repository.save(match);
    }

    public List<DebateMatch> getAll() {
        return repository.findAll();
    }

    public DebateMatch scoreDebate(Long id, int scoreA, int scoreB) {
        DebateMatch match = repository.findById(id).orElseThrow();

        match.setScoreA(scoreA);
        match.setScoreB(scoreB);

        return repository.save(match);
    }

    public List<DebateLeaderboardEntry> getLeaderboard() {

        List<DebateMatch> matches = repository.findAll();

        Map<String, Integer> winsMap = new HashMap<>();

        for (DebateMatch match : matches) {

            String winner = "";

            if (match.getScoreA() > match.getScoreB()) {
                winner = match.getTeamA();
            } else if (match.getScoreB() > match.getScoreA()) {
                winner = match.getTeamB();
            }

            if (!winner.isEmpty()) {
                winsMap.put(winner, winsMap.getOrDefault(winner, 0) + 1);
            }
        }

        List<DebateLeaderboardEntry> leaderboard = new ArrayList<>();

        for (String team : winsMap.keySet()) {
            leaderboard.add(new DebateLeaderboardEntry(team, winsMap.get(team)));
        }

        leaderboard.sort((a, b) -> b.getWins() - a.getWins());

        return leaderboard;
    }
}