package com.e102.dinosaur.service.restaurant.response;

import com.e102.dinosaur.domain.review.Review;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReviewResponse {

    private Long id;
    private String title;
    private String content;
    private String reviewAddress;

    @Builder
    public ReviewResponse(Long id, String title, String content, String reviewAddress) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.reviewAddress = reviewAddress;
    }

    public static ReviewResponse of(Review review) {
        return ReviewResponse.builder()
                .id(review.getId())
                .title(review.getTitle())
                .content(review.getContent())
                .reviewAddress(review.getReviewAddress())
                .build();
    }
}
