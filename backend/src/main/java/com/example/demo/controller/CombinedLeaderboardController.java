package com.example.demo.controller;

import com.example.demo.model.CombinedLeaderboardEntry;
import com.example.demo.service.CombinedLeaderboardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/combined-leaderboard")
@CrossOrigin(origins = "*")
public class CombinedLeaderboardController {

    private final CombinedLeaderboardService service;

    public CombinedLeaderboardController(CombinedLeaderboardService service) {
        this.service = service;
    }

    @GetMapping
    public List<CombinedLeaderboardEntry> getCombinedLeaderboard() {
        return service.getCombinedLeaderboard();
    }
}