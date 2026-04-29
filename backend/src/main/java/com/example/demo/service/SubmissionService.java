package com.example.demo.service;

import com.example.demo.model.Question;
import com.example.demo.model.Submission;
import com.example.demo.repository.QuestionRepository;
import com.example.demo.repository.SubmissionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubmissionService {

    private final SubmissionRepository submissionRepository;
    private final QuestionRepository questionRepository;

    public SubmissionService(SubmissionRepository submissionRepository, QuestionRepository questionRepository) {
        this.submissionRepository = submissionRepository;
        this.questionRepository = questionRepository;
    }

    public Submission createSubmission(Submission submission) {
        Question question = questionRepository.findById(submission.getQuestionId())
                .orElseThrow(() -> new RuntimeException("Question not found"));

        boolean isCorrect = question.getAnswer().equalsIgnoreCase(submission.getSubmittedAnswer().trim());
        submission.setCorrect(isCorrect);

        int points = 0;
        if (isCorrect) {
            points = 10 + submission.getTimeLeft();
        }

        submission.setPoints(points);

        return submissionRepository.save(submission);
    }

    public List<Submission> getAllSubmissions() {
        return submissionRepository.findAll();
    }
}