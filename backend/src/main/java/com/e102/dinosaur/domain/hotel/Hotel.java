package com.e102.dinosaur.domain.hotel;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private String address;
    private double rating;
    private int ratingCnt;
    private boolean child;
    private String imgAddress;

    public Hotel(String name, String category, String address, Double rating, int ratingCnt, boolean child, String imgAddress) {
        this.name = name;
        this.category = category;
        this.address = address;
        this.rating = rating;
        this.ratingCnt = ratingCnt;
        this.child = child;
        this.imgAddress = imgAddress;
    }
}
