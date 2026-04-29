package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "writing_submissions")
public class WritingSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String participantName;
    private String title;

    @Column(length = 5000)
    private String content;

    private Integer score;

    public WritingSubmission() {
    }

    public WritingSubmission(Long id, String participantName, String title, String content, Integer score) {
        this.id = id;
        this.participantName = participantName;
        this.title = title;
        this.content = content;
        this.score = score;
    }

    public Long getId() {
        return id;
    }

    public String getParticipantName() {
        return participantName;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public Integer getScore() {
        return score;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setParticipantName(String participantName) {
        this.participantName = participantName;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "WritingSubmission{id=" + id
                + ", participantName=" + participantName
                + ", title=" + title
                + ", score=" + score + "}";
    }
}