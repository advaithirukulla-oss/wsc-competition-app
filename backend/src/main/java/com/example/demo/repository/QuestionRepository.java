package com.example.demo.repository;

import com.example.demo.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    List<Question> findByCategory(String category);

    List<Question> findByDifficulty(String difficulty);

    List<Question> findByTournamentId(Long tournamentId);

    List<Question> findByTournamentIdAndRoundName(Long tournamentId, String roundName);
}