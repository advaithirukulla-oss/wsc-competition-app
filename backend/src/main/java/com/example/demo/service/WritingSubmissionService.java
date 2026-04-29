package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.WritingSubmission;
import com.example.demo.repository.WritingSubmissionRepository;

@Service
public class WritingSubmissionService {

    @Autowired
    private WritingSubmissionRepository writingSubmissionRepository;

    public WritingSubmission submitWriting(WritingSubmission writing) {
        return writingSubmissionRepository.save(writing);
    }

    public List<WritingSubmission> getAllWritings() {
        return writingSubmissionRepository.findAll();
    }

    public WritingSubmission scoreWriting(Long id, Integer score) {
        Optional<WritingSubmission> optionalWriting = writingSubmissionRepository.findById(id);

        if (optionalWriting.isPresent()) {
            WritingSubmission writing = optionalWriting.get();
            writing.setScore(score);
            return writingSubmissionRepository.save(writing);
        }

        return null;
    }
}