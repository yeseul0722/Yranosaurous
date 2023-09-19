package com.e102.dinosaur.service.tour.response;

import com.e102.dinosaur.domain.tour.Tour;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TourDetailResponse {

    private Long id;
    private String name;
    private String category;
    private String address;
    private String content;
    private String imgUrl;

    @Builder
    private TourDetailResponse(Long id, String name, String category, String address,
            String content, String imgUrl) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.address = address;
        this.content = content;
        this.imgUrl = imgUrl;
    }

    public static TourDetailResponse from(Tour tour) {
        return TourDetailResponse.builder()
                .id(tour.getId())
                .name(tour.getName())
                .category(tour.getCategory())
                .address(tour.getAddress())
                .content(tour.getContent())
                .imgUrl(tour.getImgUrl())
                .build();
    }
}
