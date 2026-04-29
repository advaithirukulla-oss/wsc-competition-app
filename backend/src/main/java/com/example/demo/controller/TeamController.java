package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Team;
import com.example.demo.model.TeamMember;
import com.example.demo.service.TeamService;

@RestController
@RequestMapping("/api/teams")
public class TeamController {

    @Autowired
    private TeamService teamService;

    // CREATE TEAM
    @PostMapping("/create")
    public Team createTeam(@RequestBody Team team) {
        return teamService.createTeam(team);
    }

    // JOIN TEAM
    @PostMapping("/{teamId}/join")
    public TeamMember joinTeam(@PathVariable Long teamId,
                              @RequestBody TeamMember member) {
        return teamService.joinTeam(teamId, member);
    }
}