package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class DebateMatch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String teamA;
    private String teamB;
    private String topic;
    private String round;

    private int scoreA;
    private int scoreB;

    public DebateMatch() {
    }

    public DebateMatch(String teamA, String teamB, String topic, String round, int scoreA, int scoreB) {
        this.teamA = teamA;
        this.teamB = teamB;
        this.topic = topic;
        this.round = round;
        this.scoreA = scoreA;
        this.scoreB = scoreB;
    }

    public Long getId() {
        return id;
    }

    public String getTeamA() {
        return teamA;
    }

    public void setTeamA(String teamA) {
        this.teamA = teamA;
    }

    public String getTeamB() {
        return teamB;
    }

    public void setTeamB(String teamB) {
        this.teamB = teamB;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getRound() {
        return round;
    }

    public void setRound(String round) {
        this.round = round;
    }

    public int getScoreA() {
        return scoreA;
    }

    public void setScoreA(int scoreA) {
        this.scoreA = scoreA;
    }

    public int getScoreB() {
        return scoreB;
    }

    public void setScoreB(int scoreB) {
        this.scoreB = scoreB;
    }
}