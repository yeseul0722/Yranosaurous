package com.e102.dinosaur.service.tour.response;

import com.e102.dinosaur.domain.tour.Tour;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TourResponse {

    private Long id;
    private String name;
    private String category;
    private String address;
    private String imgUrl;

    @Builder
    private TourResponse(Long id, String name, String category, String address, String imgUrl) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.address = address;
        this.imgUrl = imgUrl;
    }

    public static TourResponse from(Tour tour) {
        return TourResponse.builder()
                .id(tour.getId())
                .name(tour.getName())
                .category(tour.getCategory())
                .address(tour.getAddress())
                .imgUrl(tour.getImgUrl())
                .build();
    }
}
