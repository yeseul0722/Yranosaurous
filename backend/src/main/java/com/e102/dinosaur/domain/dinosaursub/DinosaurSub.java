package com.e102.dinosaur.domain.dinosaursub;

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
public class DinosaurSub {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String continent;
    private String country;
    private String decimalLatitude;
    private String decimalLongitude;
    private String scientificName;
    private String family;
    private String genus;
    private String higherClassification;

    public DinosaurSub(String continent, String country, String decimalLatitude,
            String decimalLongitude,
            String scientificName, String family, String genus, String higherClassification) {
        this.continent = continent;
        this.country = country;
        this.decimalLatitude = decimalLatitude;
        this.decimalLongitude = decimalLongitude;
        this.scientificName = scientificName;
        this.family = family;
        this.genus = genus;
        this.higherClassification = higherClassification;
    }
}
