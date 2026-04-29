package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Team;
import com.example.demo.model.TeamMember;
import com.example.demo.repository.TeamMemberRepository;
import com.example.demo.repository.TeamRepository;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private TeamMemberRepository teamMemberRepository;

    // Create team
    public Team createTeam(Team team) {
        return teamRepository.save(team);
    }

    // Join team
    public TeamMember joinTeam(Long teamId, TeamMember member) {
        Optional<Team> optionalTeam = teamRepository.findById(teamId);

        if (optionalTeam.isPresent()) {
            Team team = optionalTeam.get();
            member.setTeam(team);
            return teamMemberRepository.save(member);
        }

        return null;
    }
}