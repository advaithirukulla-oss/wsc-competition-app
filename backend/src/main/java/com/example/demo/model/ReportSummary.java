package com.example.demo.model;

import java.util.List;

public class ReportSummary {

    private int totalParticipants;
    private int highestScore;
    private double averageScore;
    private List<CombinedLeaderboardEntry> topThree;

    public ReportSummary() {
    }

    public ReportSummary(int totalParticipants, int highestScore, double averageScore, List<CombinedLeaderboardEntry> topThree) {
        this.totalParticipants = totalParticipants;
        this.highestScore = highestScore;
        this.averageScore = averageScore;
        this.topThree = topThree;
    }

    public int getTotalParticipants() {
        return totalParticipants;
    }

    public int getHighestScore() {
        return highestScore;
    }

    public double getAverageScore() {
        return averageScore;
    }

    public List<CombinedLeaderboardEntry> getTopThree() {
        return topThree;
    }
}