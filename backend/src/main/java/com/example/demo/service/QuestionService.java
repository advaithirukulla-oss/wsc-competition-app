package com.example.demo.service;

import com.example.demo.model.Question;
import com.example.demo.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    private final QuestionRepository repository;

    public QuestionService(QuestionRepository repository) {
        this.repository = repository;
    }

    public Question createQuestion(Question question) {
        return repository.save(question);
    }

    public List<Question> getAllQuestions() {
        return repository.findAll();
    }

    public List<Question> getQuestionsByCategory(String category) {
        return repository.findByCategory(category);
    }

    public List<Question> getQuestionsByDifficulty(String difficulty) {
        return repository.findByDifficulty(difficulty);
    }

    public List<Question> getQuestionsByTournament(Long tournamentId) {
        return repository.findByTournamentId(tournamentId);
    }

    public List<Question> getQuestionsByTournamentAndRound(Long tournamentId, String roundName) {
        return repository.findByTournamentIdAndRoundName(tournamentId, roundName);
    }

    public Question updateQuestion(Long id, Question updatedQuestion) {
        Question question = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found with id: " + id));

        question.setQuestionText(updatedQuestion.getQuestionText());

        question.setOptionA(updatedQuestion.getOptionA());
        question.setOptionB(updatedQuestion.getOptionB());
        question.setOptionC(updatedQuestion.getOptionC());
        question.setOptionD(updatedQuestion.getOptionD());

        question.setAnswer(updatedQuestion.getAnswer());
        question.setDifficulty(updatedQuestion.getDifficulty());
        question.setCategory(updatedQuestion.getCategory());
        question.setTournamentId(updatedQuestion.getTournamentId());
        question.setRoundName(updatedQuestion.getRoundName());

        return repository.save(question);
    }

    public Question assignQuestionToTournament(Long questionId, Long tournamentId, String roundName) {
        Question question = repository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found with id: " + questionId));

        question.setTournamentId(tournamentId);
        question.setRoundName(roundName);

        return repository.save(question);
    }

    public void deleteQuestion(Long id) {
        Question question = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found with id: " + id));

        repository.delete(question);
    }
}