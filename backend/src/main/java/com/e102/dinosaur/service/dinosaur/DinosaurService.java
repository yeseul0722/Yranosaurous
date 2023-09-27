package com.e102.dinosaur.service.dinosaur;

import com.e102.dinosaur.domain.dinosaur.Dinosaur;
import com.e102.dinosaur.domain.dinosaur.DinosaurRepository;
import com.e102.dinosaur.domain.dinosaursub.DinosaurSub;
import com.e102.dinosaur.domain.dinosaursub.DinosaurSubRepository;
import com.e102.dinosaur.exception.BaseException;
import com.e102.dinosaur.service.dinosaur.response.DinosaurDetailResponse;
import com.e102.dinosaur.service.dinosaur.response.DinosaurResponse;
import com.e102.dinosaur.service.dinosaur.response.DinosaurSubResponse;
import java.util.Collections;
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
    private final DinosaurSubRepository dinosaurSubRepository;

    public List<DinosaurResponse> getDinosaurs() {
        return dinosaurRepository.findAll().stream()
                .map(DinosaurResponse::from)
                .sorted()
                .collect(Collectors.toList());
    }

    public DinosaurDetailResponse getDinosaur(Long id) {
        Dinosaur dinosaur = dinosaurRepository.findById(id)
                .orElseThrow(() -> new BaseException("해당 공룡을 찾을 수 없습니다.", 1001));

        return DinosaurDetailResponse.from(dinosaur);
    }

    public List<DinosaurSubResponse> getDinosaurSubsBy(String name) {
        List<DinosaurSub> dinosaurSubs = dinosaurSubRepository.findAllByScientificNameContains(
                name);

        return dinosaurSubs.stream()
                .map(DinosaurSubResponse::from)
                .collect(Collectors.toList());
    }
}