package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WebController {

    @GetMapping("/health")
    @ResponseBody
    public String health() {
        return "ok";
    }

    @GetMapping("/{path:[^\\.]*}")
    public String frontend() {
        return "forward:/index.html";
    }
}
