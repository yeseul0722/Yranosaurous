package com.e102.dinosaur.service.place.response;


import com.e102.dinosaur.domain.courseorder.CourseOrder;
import com.e102.dinosaur.domain.festival.Festival;
import com.e102.dinosaur.domain.place.Place;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlaceResponse {

    private Long id;
    private String name;
    private String longitude;
    private String latitude;
    private int markerNumber;
    private String imgAddress;
    private String content;
    private String type;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<Festival> festivalList;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<CourseOrder> courseOrderList;

    public static PlaceResponse saveOf(Place place) {
        return PlaceResponse.builder()
                .id(place.getId())
                .name(place.getName())
                .longitude(place.getLongitude())
                .latitude(place.getLatitude())
                .markerNumber(place.getMarkerNumber())
                .imgAddress(place.getImgAddress())
                .content(place.getContent())
                .type(place.getType().getText())
                .build();
    }
}
