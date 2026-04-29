package com.example.demo.model;

public class WritingLeaderboardEntry {

    private String participantName;
    private Integer score;

    public WritingLeaderboardEntry() {
    }

    public WritingLeaderboardEntry(String participantName, Integer score) {
        this.participantName = participantName;
        this.score = score;
    }

    public String getParticipantName() {
        return participantName;
    }

    public void setParticipantName(String participantName) {
        this.participantName = participantName;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }
}