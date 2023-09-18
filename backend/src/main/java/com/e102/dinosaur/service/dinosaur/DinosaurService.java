package com.e102.dinosaur.service.dinosaur;

import com.e102.dinosaur.domain.dinosaur.DinosaurRepository;
import com.e102.dinosaur.domain.dinosaursub.DinosaurSubRepository;
import com.e102.dinosaur.service.dinosaur.response.DinosaurResponse;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class DinosaurService {

    private final DinosaurRepository dinosaurRepository;

    public List<DinosaurResponse> getDinosaurs() {
        return dinosaurRepository.findAll().stream()
                .map(DinosaurResponse::from)
                .collect(Collectors.toList());
    }
}