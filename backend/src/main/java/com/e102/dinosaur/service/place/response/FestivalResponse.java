package com.e102.dinosaur.service.place.response;

import com.e102.dinosaur.domain.festival.Festival;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FestivalResponse {

    private Long id;
    private String name;
    private LocalDateTime startTime;
    private String placeName;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public PlaceResponse placeResponse;

    public static FestivalResponse of(Festival festival) {
        return FestivalResponse.builder()
                .id(festival.getId())
                .name(festival.getName())
                .startTime(festival.getStartTime())
                .placeName(festival.getPlace().getName())
                .build();
    }

    public static FestivalResponse placeOf(Festival festival) {
        return FestivalResponse.builder()
                .id(festival.getId())
                .name(festival.getName())
                .startTime(festival.getStartTime())
                .placeName(festival.getPlace().getName())
                .placeResponse(PlaceResponse.of(festival.getPlace()))
                .build();
    }

}
