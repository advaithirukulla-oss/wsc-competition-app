package com.example.demo.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.WritingLeaderboardEntry;
import com.example.demo.model.WritingSubmission;
import com.example.demo.repository.WritingSubmissionRepository;

@Service
public class WritingLeaderboardService {

    @Autowired
    private WritingSubmissionRepository writingSubmissionRepository;

    public List<WritingLeaderboardEntry> getWritingLeaderboard() {
        List<WritingSubmission> writings = writingSubmissionRepository.findAll();
        List<WritingLeaderboardEntry> leaderboard = new ArrayList<>();

        for (WritingSubmission writing : writings) {
            if (writing.getScore() != null) {
                leaderboard.add(
                    new WritingLeaderboardEntry(
                        writing.getParticipantName(),
                        writing.getScore()
                    )
                );
            }
        }

        leaderboard.sort(Comparator.comparing(WritingLeaderboardEntry::getScore).reversed());

        return leaderboard;
    }
}