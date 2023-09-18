package com.e102.dinosaur.service.tour;

import com.e102.dinosaur.domain.tour.TourRepository;
import com.e102.dinosaur.service.tour.response.TourResponse;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TourService {

    private final TourRepository tourRepository;

    public List<TourResponse> getTours() {
        return tourRepository.findAll().stream()
                .map(TourResponse::from)
                .collect(Collectors.toList());
    }
}
