package com.e102.dinosaur.service.tour;

import com.e102.dinosaur.domain.tour.Tour;
import com.e102.dinosaur.domain.tour.TourRepository;
import com.e102.dinosaur.exception.BaseException;
import com.e102.dinosaur.service.tour.response.TourDetailResponse;
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

    public List<TourResponse> getToursBy(String category) {
        List<Tour> tours = tourRepository.findAllByCategoryIs(category);

        if(tours.isEmpty()) {
            throw new BaseException("존재하지 않는 관광지 카테고리 입니다.", 2000);
        }

        return tours.stream()
                .map(TourResponse::from)
                .collect(Collectors.toList());
    }

    public TourDetailResponse getTour(Long id) {
        Tour tour = tourRepository.findById(id)
                .orElseThrow(() -> new BaseException("관광지를 찾을 수 없습니다.", 2001));

        return TourDetailResponse.from(tour);
    }
}
