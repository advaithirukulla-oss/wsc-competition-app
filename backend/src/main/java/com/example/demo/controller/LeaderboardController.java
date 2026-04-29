package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.LeaderboardEntry;
import com.example.demo.service.LeaderboardService;

@RestController
@RequestMapping("/api/leaderboard")
@CrossOrigin(origins = "http://localhost:5173")
public class LeaderboardController {

    @Autowired
    private LeaderboardService leaderboardService;

    @GetMapping
    public List<LeaderboardEntry> getLeaderboard() {
        return leaderboardService.getLeaderboard();
    }
}