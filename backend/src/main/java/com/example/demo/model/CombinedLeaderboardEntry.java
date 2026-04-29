package com.example.demo.model;

public class CombinedLeaderboardEntry {

    private String username;
    private int bowlScore;
    private int writingScore;
    private int debateScore;
    private int totalScore;

    public CombinedLeaderboardEntry() {
    }

    public CombinedLeaderboardEntry(String username, int bowlScore, int writingScore, int debateScore) {
        this.username = username;
        this.bowlScore = bowlScore;
        this.writingScore = writingScore;
        this.debateScore = debateScore;
        this.totalScore = bowlScore + writingScore + debateScore;
    }

    public String getUsername() {
        return username;
    }

    public int getBowlScore() {
        return bowlScore;
    }

    public int getWritingScore() {
        return writingScore;
    }

    public int getDebateScore() {
        return debateScore;
    }

    public int getTotalScore() {
        return totalScore;
    }
}