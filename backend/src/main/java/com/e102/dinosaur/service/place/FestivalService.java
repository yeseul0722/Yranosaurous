package com.e102.dinosaur.service.place;

import com.e102.dinosaur.controller.place.request.FestivalRequest;
import com.e102.dinosaur.domain.festival.Festival;
import com.e102.dinosaur.domain.festival.FestivalRepository;
import com.e102.dinosaur.domain.place.Place;
import com.e102.dinosaur.domain.place.PlaceRepository;
import com.e102.dinosaur.domain.place.PlaceType;
import com.e102.dinosaur.exception.BaseException;
import com.e102.dinosaur.service.place.response.FestivalResponse;
import com.e102.dinosaur.service.place.response.PlaceResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class FestivalService {

    private final PlaceRepository placeRepository;
    private final FestivalRepository festivalRepository;

    public FestivalResponse saveFestival(FestivalRequest festivalRequest) {
        Place place = placeRepository.findById(festivalRequest.getPlaceId())
                .orElseThrow(() -> new BaseException("존재하지 않는 장소입니다.", 7000));
        Festival festival = festivalRequest.toEntity();
        place.addFestival(festival);
        festivalRepository.save(festival);
        return FestivalResponse.of(festival);
    }

    public List<PlaceResponse> findFestivals() {
        List<Place> placeList = placeRepository.findByType(PlaceType.PREVIEW);
        return placeList.stream()
                .map(PlaceResponse::festivalOf)
                .toList();
    }

    public List<FestivalResponse> findFestival(LocalDate startTime) {
        LocalDateTime startDateTime = startTime.atStartOfDay();
        LocalDateTime endDateTime = startTime.plusDays(1).atStartOfDay();
        List<Festival> festivalList = festivalRepository.findByStartTimeBetweenOrderByStartTimeAsc(startDateTime, endDateTime);
        return festivalList.stream()
                .map(FestivalResponse::placeOf)
                .toList();
    }


    public FestivalResponse modifyFestival(FestivalRequest festivalRequest, Long festivalId) {
        Festival festival = festivalRepository.findById(festivalId)
                .orElseThrow(() -> new BaseException("존재하지 않는 공연입니다.", 7001));
        Place place = placeRepository.findById(festivalRequest.getPlaceId())
                .orElseThrow(() -> new BaseException("존재하지 않는 장소입니다.", 7000));
        festival.modifyFestival(festivalRequest, place);
        return FestivalResponse.of(festival);
    }

    public void deleteFestival(Long festivalId) {
        festivalRepository.deleteById(festivalId);
    }
}
