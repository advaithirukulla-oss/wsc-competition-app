package com.example.demo.service;

import com.example.demo.model.CombinedLeaderboardEntry;
import com.example.demo.model.ReportSummary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {

    private final CombinedLeaderboardService combinedLeaderboardService;

    public ReportService(CombinedLeaderboardService combinedLeaderboardService) {
        this.combinedLeaderboardService = combinedLeaderboardService;
    }

    public ReportSummary getReportSummary() {
        List<CombinedLeaderboardEntry> leaderboard = combinedLeaderboardService.getCombinedLeaderboard();

        int totalParticipants = leaderboard.size();

        int highestScore = 0;
        int totalScore = 0;

        for (CombinedLeaderboardEntry entry : leaderboard) {
            int score = entry.getTotalScore();

            if (score > highestScore) {
                highestScore = score;
            }

            totalScore += score;
        }

        double averageScore = 0;

        if (totalParticipants > 0) {
            averageScore = (double) totalScore / totalParticipants;
        }

        List<CombinedLeaderboardEntry> topThree;

        if (leaderboard.size() > 3) {
            topThree = leaderboard.subList(0, 3);
        } else {
            topThree = leaderboard;
        }

        return new ReportSummary(totalParticipants, highestScore, averageScore, topThree);
    }
}