package com.e102.dinosaur.domain.restaurant;

import com.e102.dinosaur.domain.hashtag.HashTag;
import com.e102.dinosaur.domain.menu.Menu;
import com.e102.dinosaur.domain.review.Review;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String storeName;
    private int category;
    private double rating;
    private int ratingCnt;
    private double score;
    private String address;
    private String imgAddress;

    @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<HashTag> hashTags;

    @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Menu> menus;

    @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Review> reviews;
    
    public Restaurant(String storeName, int category, double rating, int ratingCnt, double score, String address, String imgAddress) {
        this.storeName = storeName;
        this.category = category;
        this.rating = rating;
        this.ratingCnt = ratingCnt;
        this.score = score;
        this.address = address;
        this.imgAddress = imgAddress;
    }
}
