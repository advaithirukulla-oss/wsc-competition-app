package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.WritingSubmission;
import com.example.demo.service.WritingSubmissionService;

@RestController
@RequestMapping("/api/writing")
@CrossOrigin(origins = "http://localhost:5173")
public class WritingSubmissionController {

    @Autowired
    private WritingSubmissionService writingSubmissionService;

    @PostMapping("/submit")
    public WritingSubmission submitWriting(@RequestBody WritingSubmission writing) {
        return writingSubmissionService.submitWriting(writing);
    }

    @GetMapping
    public List<WritingSubmission> getAllWritings() {
        return writingSubmissionService.getAllWritings();
    }

    @PutMapping("/score/{id}")
    public WritingSubmission scoreWriting(@PathVariable Long id, @RequestBody Map<String, Integer> body) {
        Integer score = body.get("score");
        return writingSubmissionService.scoreWriting(id, score);
    }
}