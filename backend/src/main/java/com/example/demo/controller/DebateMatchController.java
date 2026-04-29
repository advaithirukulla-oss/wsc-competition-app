package com.example.demo.controller;

import com.example.demo.model.DebateMatch;
import com.example.demo.model.DebateLeaderboardEntry;
import com.example.demo.service.DebateMatchService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/debates")
@CrossOrigin(origins = "*")
public class DebateMatchController {

    private final DebateMatchService service;

    public DebateMatchController(DebateMatchService service) {
        this.service = service;
    }

    @PostMapping("/create")
    public DebateMatch create(@RequestBody DebateMatch match) {
        return service.create(match);
    }

    @GetMapping
    public List<DebateMatch> getAll() {
        return service.getAll();
    }

    @PutMapping("/score/{id}")
    public DebateMatch scoreDebate(
            @PathVariable Long id,
            @RequestParam int scoreA,
            @RequestParam int scoreB
    ) {
        return service.scoreDebate(id, scoreA, scoreB);
    }

    @GetMapping("/leaderboard")
    public List<DebateLeaderboardEntry> getLeaderboard() {
        return service.getLeaderboard();
    }
}