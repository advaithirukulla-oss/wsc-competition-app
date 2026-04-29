package com.example.demo.model;

public class DebateLeaderboardEntry {

    private String teamName;
    private int wins;

    public DebateLeaderboardEntry() {
    }

    public DebateLeaderboardEntry(String teamName, int wins) {
        this.teamName = teamName;
        this.wins = wins;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public int getWins() {
        return wins;
    }

    public void setWins(int wins) {
        this.wins = wins;
    }
}