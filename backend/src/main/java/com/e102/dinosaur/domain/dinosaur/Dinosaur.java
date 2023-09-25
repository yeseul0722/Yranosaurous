package com.e102.dinosaur.domain.dinosaur;

import com.e102.dinosaur.domain.dinosaursupermuseum.DinosaurMuseum;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Dinosaur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String korName;
    private String engName;
    private String category;
    private String taste;
    private String discoverySite;
    private String era;
    private String simpleContent;
    private String imgAddress;
    @Column(columnDefinition = "TEXT")
    private String summary;
    private String length;
    private String weight;
    @Column(columnDefinition = "TEXT")
    private String content;

    @OneToMany(mappedBy = "dinosaur", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<DinosaurMuseum> dinosaurMuseums;

    public Dinosaur(String korName, String engName, String category, String taste,
            String discoverySite, String era, String simpleContent, String content, String imgAddress,
            String summary, String length, String weight) {
        this.korName = korName;
        this.engName = engName;
        this.category = category;
        this.taste = taste;
        this.discoverySite = discoverySite;
        this.era = era;
        this.simpleContent = simpleContent;
        this.content = content;
        this.imgAddress = imgAddress;
        this.summary = summary;
        this.length = length;
        this.weight = weight;
    }
}
