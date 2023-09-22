package com.e102.dinosaur.controller.place.request;

import com.e102.dinosaur.domain.place.Place;
import com.e102.dinosaur.domain.place.PlaceType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlaceRequest {

    private String name;
    private String longitude;
    private String latitude;
    private String imgAddress;
    private String content;
    private PlaceType type;
    private int markerNumber;

    public Place toEntity() {
        return Place.builder()
                .name(name)
                .longitude(longitude)
                .latitude(latitude)
                .imgAddress(imgAddress)
                .content(content)
                .type(type)
                .markerNumber(markerNumber)
                .build();
    }
}
