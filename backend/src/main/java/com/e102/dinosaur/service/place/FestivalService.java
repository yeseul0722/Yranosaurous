package com.e102.dinosaur.service.place;

import com.e102.dinosaur.controller.place.request.FestivalRequest;
import com.e102.dinosaur.domain.festival.Festival;
import com.e102.dinosaur.domain.festival.FestivalRepository;
import com.e102.dinosaur.domain.place.Place;
import com.e102.dinosaur.domain.place.PlaceRepository;
import com.e102.dinosaur.exception.BaseException;
import com.e102.dinosaur.service.place.response.FestivalResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class FestivalService {

    private final PlaceRepository placeRepository;
    private final FestivalRepository festivalRepository;

    public FestivalResponse saveFestival(FestivalRequest festivalRequest) {
        Place place = placeRepository.findById(festivalRequest.getPlaceId())
                .orElseThrow(() -> new BaseException("없는 장소입니다.", 7000));
        Festival festival = festivalRequest.toEntity();
        place.addFestival(festival);
        festivalRepository.save(festival);
        return FestivalResponse.of(festival);
    }

}
