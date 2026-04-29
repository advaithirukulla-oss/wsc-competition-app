package com.example.demo.service;

import com.example.demo.model.CombinedLeaderboardEntry;
import com.example.demo.model.Submission;
import com.example.demo.model.WritingSubmission;
import com.example.demo.repository.SubmissionRepository;
import com.example.demo.repository.WritingSubmissionRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CombinedLeaderboardService {

    private final SubmissionRepository submissionRepository;
    private final WritingSubmissionRepository writingSubmissionRepository;

    public CombinedLeaderboardService(
            SubmissionRepository submissionRepository,
            WritingSubmissionRepository writingSubmissionRepository
    ) {
        this.submissionRepository = submissionRepository;
        this.writingSubmissionRepository = writingSubmissionRepository;
    }

    public List<CombinedLeaderboardEntry> getCombinedLeaderboard() {

        Map<String, Integer> bowlScores = new HashMap<>();
        Map<String, Integer> writingScores = new HashMap<>();
        Map<String, Integer> debateScores = new HashMap<>();

        List<Submission> submissions = submissionRepository.findAll();

        for (Submission submission : submissions) {
            String username = submission.getUsername();
            int points = submission.getPoints();

            bowlScores.put(username, bowlScores.getOrDefault(username, 0) + points);
        }

        List<WritingSubmission> writings = writingSubmissionRepository.findAll();

        for (WritingSubmission writing : writings) {
            String username = writing.getParticipantName();
            int score = writing.getScore() != null ? writing.getScore() : 0;

            writingScores.put(username, writingScores.getOrDefault(username, 0) + score);
        }

        Set<String> allUsers = new HashSet<>();
        allUsers.addAll(bowlScores.keySet());
        allUsers.addAll(writingScores.keySet());
        allUsers.addAll(debateScores.keySet());

        List<CombinedLeaderboardEntry> leaderboard = new ArrayList<>();

        for (String username : allUsers) {
            int bowl = bowlScores.getOrDefault(username, 0);
            int writing = writingScores.getOrDefault(username, 0);
            int debate = debateScores.getOrDefault(username, 0);

            leaderboard.add(new CombinedLeaderboardEntry(username, bowl, writing, debate));
        }

        leaderboard.sort((a, b) -> b.getTotalScore() - a.getTotalScore());

        return leaderboard;
    }
}