package com.e102.dinosaur.service.place;

import com.e102.dinosaur.domain.festival.FestivalRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class FestivalService {

    private final FestivalRepository festivalRepository;

    public void saveFestival() {

    }

}
