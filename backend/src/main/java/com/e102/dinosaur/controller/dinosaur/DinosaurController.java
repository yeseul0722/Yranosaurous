package com.e102.dinosaur.controller.dinosaur;

import com.e102.dinosaur.domain.dinosaur.DinosaurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class DinosaurController {

    private final DinosaurRepository dinosaurRepository;

    @GetMapping("/dinosaurs")
    public int authenticationPayment() {
        return dinosaurRepository.findAll().size();
    }

}
