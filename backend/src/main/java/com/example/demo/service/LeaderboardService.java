package com.example.demo.service;

import com.example.demo.model.LeaderboardEntry;
import com.example.demo.model.Submission;
import com.example.demo.repository.SubmissionRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class LeaderboardService {

    private final SubmissionRepository submissionRepository;

    public LeaderboardService(SubmissionRepository submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    public List<LeaderboardEntry> getLeaderboard() {
        List<Submission> submissions = submissionRepository.findAll();

        Map<String, Integer> scoreMap = new HashMap<>();

        for (Submission submission : submissions) {
            String username = submission.getUsername();
            int points = submission.getPoints();

            scoreMap.put(username, scoreMap.getOrDefault(username, 0) + points);
        }

        List<LeaderboardEntry> leaderboard = new ArrayList<>();

        for (String username : scoreMap.keySet()) {
            leaderboard.add(new LeaderboardEntry(username, scoreMap.get(username)));
        }

        leaderboard.sort((a, b) -> b.getScore() - a.getScore());

        return leaderboard;
    }
}