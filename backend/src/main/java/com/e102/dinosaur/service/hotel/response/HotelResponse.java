package com.e102.dinosaur.service.hotel.response;

import com.e102.dinosaur.domain.hotel.Hotel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class HotelResponse {

    private Long id;
    private String name;
    private String category;
    private String address;
    private double rating;
    private int ratingCnt;
    private boolean child;
    private String imgAddress;

    @Builder
    public HotelResponse(Long id, String name, String category, String address, Double rating, int ratingCnt, boolean child, String imgAddress) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.address = address;
        this.rating = rating;
        this.ratingCnt = ratingCnt;
        this.child = child;
        this.imgAddress = imgAddress;
    }

    public static HotelResponse of(Hotel hotel) {
        return HotelResponse.builder()
                .id(hotel.getId())
                .name(hotel.getName())
                .category(hotel.getCategory())
                .address(hotel.getAddress())
                .rating(hotel.getRating())
                .ratingCnt(hotel.getRatingCnt())
                .child(hotel.isChild())
                .imgAddress(hotel.getImgAddress())
                .build();
    }
}
