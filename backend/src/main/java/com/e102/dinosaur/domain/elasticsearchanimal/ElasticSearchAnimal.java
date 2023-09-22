package com.e102.dinosaur.domain.elasticsearchanimal;

import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "animal")
@NoArgsConstructor
@Getter
public class ElasticSearchAnimal {

    @Id
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
    private ElasticSearchAnimal(Long id, String continent, String country, String decimalLatitude,
            String decimalLongitude, String scientificName, String family, String genus, String higherClassification) {
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
}
