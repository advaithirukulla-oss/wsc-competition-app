package com.example.demo.controller;

import com.example.demo.model.ReportSummary;
import com.example.demo.service.ReportService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "*")
public class ReportController {

    private final ReportService service;

    public ReportController(ReportService service) {
        this.service = service;
    }

    @GetMapping("/summary")
    public ReportSummary getReportSummary() {
        return service.getReportSummary();
    }
}