package com.e102.dinosaur.controller.place.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class FestivalRequest {
    
    private String name;
    private LocalDate startDate;
    private LocalDateTime startTime;
    private int placeId;

}
