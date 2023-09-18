package com.e102.dinosaur.service.dinosaur.response;

import com.e102.dinosaur.domain.dinosaursub.DinosaurSub;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DinosaurSubResponse {

    private Long id;
    private String continent;
    private String country;
    private String decimalLatitude;
    private String decimalLongitude;
    private String scientificName;
    private String family;
    private String genus;
    private String higherClassification;

    @Builder
    private DinosaurSubResponse(Long id, String continent, String country, String decimalLatitude,
            String decimalLongitude, String scientificName, String family, String genus,
            String higherClassification) {
        this.id = id;
        this.continent = continent;
        this.country = country;
        this.decimalLatitude = decimalLatitude;
        this.decimalLongitude = decimalLongitude;
        this.scientificName = scientificName;
        this.family = family;
        this.genus = genus;
        this.higherClassification = higherClassification;
    }


    public static DinosaurSubResponse from(DinosaurSub dinosaurSub) {
        return DinosaurSubResponse.builder()
                .id(dinosaurSub.getId())
                .continent(dinosaurSub.getContinent())
                .country(dinosaurSub.getCountry())
                .decimalLatitude(dinosaurSub.getDecimalLatitude())
                .decimalLongitude(dinosaurSub.getDecimalLongitude())
                .scientificName(dinosaurSub.getScientificName())
                .family(dinosaurSub.getFamily())
                .genus(dinosaurSub.getGenus())
                .higherClassification(dinosaurSub.getHigherClassification())
                .build();
    }
}
