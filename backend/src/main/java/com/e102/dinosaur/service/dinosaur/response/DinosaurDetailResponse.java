package com.e102.dinosaur.service.dinosaur.response;

import com.e102.dinosaur.domain.dinosaur.Dinosaur;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DinosaurDetailResponse {

    private Long id;
    private String korName;
    private String engName;
    private String category;
    private String taste;
    private String discoverySite;
    private String era;
    private String simpleContent;
    private String imgAddress;
    private String content;
    private String summary;
    private String length;
    private String weight;
    private List<MuseumResponse> museums;

    @Builder
    private DinosaurDetailResponse(Long id, String korName, String engName, String category,
            String taste, String discoverySite, String era, String simpleContent, String imgAddress,
            String content, String summary, String length, String weight, List<MuseumResponse> museums) {
        this.id = id;
        this.korName = korName;
        this.engName = engName;
        this.category = category;
        this.taste = taste;
        this.discoverySite = discoverySite;
        this.era = era;
        this.simpleContent = simpleContent;
        this.imgAddress = imgAddress;
        this.content = content;
        this.summary = summary;
        this.length = length;
        this.weight = weight;
        this.museums = museums;
    }

    public static DinosaurDetailResponse from(Dinosaur dinosaur) {
        List<MuseumResponse> museums = dinosaur.getDinosaurMuseums().stream()
                .map(MuseumResponse::from)
                .collect(Collectors.toList());

        return DinosaurDetailResponse.builder()
                .id(dinosaur.getId())
                .korName(dinosaur.getKorName())
                .engName(dinosaur.getEngName())
                .category(dinosaur.getCategory())
                .taste(dinosaur.getTaste())
                .discoverySite(dinosaur.getDiscoverySite())
                .era(dinosaur.getEra())
                .simpleContent(dinosaur.getSimpleContent())
                .imgAddress(dinosaur.getImgAddress())
                .content(dinosaur.getContent())
                .summary(dinosaur.getSummary())
                .length(dinosaur.getLength())
                .weight(dinosaur.getWeight())
                .museums(museums)
                .build();
    }
}
