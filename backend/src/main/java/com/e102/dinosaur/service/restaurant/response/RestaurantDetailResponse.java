package com.e102.dinosaur.service.restaurant.response;

import com.e102.dinosaur.domain.restaurant.Restaurant;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class RestaurantDetailResponse {
    private Long id;
    private String storeName;
    private int category;
    private double rating;
    private int ratingCnt;
    private double score;
    private String address;
    private String imgAddress;
    private List<HashTagResponse> hashTagList;
    private List<MenuResponse> menuResponseList;
    private List<ReviewResponse> reviewResponseList;

    @Builder
    public RestaurantDetailResponse(Long id, String storeName, int category, double rating, int ratingCnt, double score,
            String address, String imgAddress, List<HashTagResponse> hashTagList, List<MenuResponse> menuResponseList, List<ReviewResponse> reviewResponseList) {
        this.id = id;
        this.storeName = storeName;
        this.category = category;
        this.rating = rating;
        this.ratingCnt = ratingCnt;
        this.score = score;
        this.address = address;
        this.imgAddress = imgAddress;
        this.hashTagList = hashTagList;
        this.menuResponseList = menuResponseList;
        this.reviewResponseList = reviewResponseList;
    }

    public static RestaurantDetailResponse of(Restaurant restaurant) {
        return RestaurantDetailResponse.builder()
                .id(restaurant.getId())
                .storeName(restaurant.getStoreName())
                .category(restaurant.getCategory())
                .rating(restaurant.getRating())
                .ratingCnt(restaurant.getRatingCnt())
                .score(restaurant.getScore())
                .address(restaurant.getAddress())
                .imgAddress(restaurant.getImgAddress())
                .hashTagList(restaurant.getHashTags().stream().map(HashTagResponse::of).toList())
                .menuResponseList(restaurant.getMenus().stream().map(MenuResponse::of).toList())
                .reviewResponseList(restaurant.getReviews().stream().map(ReviewResponse::of).toList())
                .build();
    }
}
