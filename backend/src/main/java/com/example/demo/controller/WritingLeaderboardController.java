package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.WritingLeaderboardEntry;
import com.example.demo.service.WritingLeaderboardService;

@RestController
@RequestMapping("/api/writing-leaderboard")
@CrossOrigin(origins = "http://localhost:5173")
public class WritingLeaderboardController {

    @Autowired
    private WritingLeaderboardService writingLeaderboardService;

    @GetMapping
    public List<WritingLeaderboardEntry> getWritingLeaderboard() {
        return writingLeaderboardService.getWritingLeaderboard();
    }
}