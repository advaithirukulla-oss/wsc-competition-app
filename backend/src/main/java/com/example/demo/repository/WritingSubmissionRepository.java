package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.WritingSubmission;

public interface WritingSubmissionRepository extends JpaRepository<WritingSubmission, Long> {
}