package com.e102.dinosaur.domain.review;

import com.e102.dinosaur.domain.restaurant.Restaurant;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    private String title;
    private String content;
    private String reviewAddress;

    public Review(String title, String content, String reviewAddress) {
        this.title = title;
        this.content = content;
        this.reviewAddress = reviewAddress;
    }
}
