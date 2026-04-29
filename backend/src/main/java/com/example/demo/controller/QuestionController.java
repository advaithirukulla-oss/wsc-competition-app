package com.example.demo.controller;

import com.example.demo.model.Question;
import com.example.demo.service.QuestionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "*")
public class QuestionController {

    private final QuestionService service;

    public QuestionController(QuestionService service) {
        this.service = service;
    }

    @PostMapping("/create")
    public Question createQuestion(@RequestBody Question question) {
        return service.createQuestion(question);
    }

    @GetMapping
    public List<Question> getAllQuestions() {
        return service.getAllQuestions();
    }

    @GetMapping("/category/{category}")
    public List<Question> getQuestionsByCategory(@PathVariable String category) {
        return service.getQuestionsByCategory(category);
    }

    @GetMapping("/difficulty/{difficulty}")
    public List<Question> getQuestionsByDifficulty(@PathVariable String difficulty) {
        return service.getQuestionsByDifficulty(difficulty);
    }

    @GetMapping("/tournament/{tournamentId}")
    public List<Question> getQuestionsByTournament(@PathVariable Long tournamentId) {
        return service.getQuestionsByTournament(tournamentId);
    }

    @GetMapping("/tournament/{tournamentId}/round/{roundName}")
    public List<Question> getQuestionsByTournamentAndRound(
            @PathVariable Long tournamentId,
            @PathVariable String roundName
    ) {
        return service.getQuestionsByTournamentAndRound(tournamentId, roundName);
    }

    @PutMapping("/assign/{questionId}")
    public Question assignQuestionToTournament(
            @PathVariable Long questionId,
            @RequestParam Long tournamentId,
            @RequestParam String roundName
    ) {
        return service.assignQuestionToTournament(questionId, tournamentId, roundName);
    }

    @PutMapping("/update/{id}")
    public Question updateQuestion(@PathVariable Long id, @RequestBody Question updatedQuestion) {
        return service.updateQuestion(id, updatedQuestion);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteQuestion(@PathVariable Long id) {
        service.deleteQuestion(id);
    }
}