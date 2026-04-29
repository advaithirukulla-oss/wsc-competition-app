package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.TeamMember;

public interface TeamMemberRepository extends JpaRepository<TeamMember, Long> {
}