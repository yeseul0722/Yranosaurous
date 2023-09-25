package com.e102.dinosaur.service.place.response;

import com.e102.dinosaur.domain.festival.Festival;
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

    public static FestivalResponse of(Festival festival) {
        return FestivalResponse.builder()
                .id(festival.getId())
                .name(festival.getName())
                .startTime(festival.getStartTime())
                .build();
    }

}
