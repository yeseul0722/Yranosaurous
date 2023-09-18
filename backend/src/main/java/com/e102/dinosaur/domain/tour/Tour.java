package com.e102.dinosaur.domain.tour;

import jakarta.persistence.Column;
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
public class Tour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private String address;
    @Column(columnDefinition = "TEXT")
    private String content;
    private String imgUrl;

    public Tour(String name, String category, String address, String imgUrl) {
        this.name = name;
        this.category = category;
        this.address = address;
        this.imgUrl = imgUrl;
    }
}
