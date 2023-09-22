package com.e102.dinosaur.controller.place.request;

import com.e102.dinosaur.domain.festival.Festival;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class FestivalRequest {

    private String name;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime startTime;
    private Long placeId;

    public Festival toEntity() {
        return Festival.builder()
                .name(name)
                .startTime(startTime)
                .build();
    }
}
