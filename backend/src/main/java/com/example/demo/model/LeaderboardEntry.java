package com.example.demo.model;

public class LeaderboardEntry {

    private String participantName;
    private int score;

    public LeaderboardEntry() {
    }

    public LeaderboardEntry(String participantName, int score) {
        this.participantName = participantName;
        this.score = score;
    }

    public String getParticipantName() {
        return participantName;
    }

    public void setParticipantName(String participantName) {
        this.participantName = participantName;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}