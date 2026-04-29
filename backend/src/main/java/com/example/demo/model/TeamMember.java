package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "team_members")
public class TeamMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String memberName;

    private String scholarCode;

    private String grade;

    @ManyToOne
    @JoinColumn(name = "team_id")
    @JsonIgnore
    private Team team;

    public TeamMember() {
    }

    public TeamMember(Long id, String memberName, String scholarCode, String grade, Team team) {
        this.id = id;
        this.memberName = memberName;
        this.scholarCode = scholarCode;
        this.grade = grade;
        this.team = team;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getScholarCode() {
        return scholarCode;
    }

    public void setScholarCode(String scholarCode) {
        this.scholarCode = scholarCode;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    @Override
    public String toString() {
        return "TeamMember{id=" + id + ", name=" + memberName + "}";
    }
}