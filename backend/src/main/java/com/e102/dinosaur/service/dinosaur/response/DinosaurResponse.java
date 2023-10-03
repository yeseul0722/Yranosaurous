package com.e102.dinosaur.service.dinosaur.response;

import com.e102.dinosaur.domain.dinosaur.Dinosaur;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DinosaurResponse implements Comparable<DinosaurResponse> {

    private Long id;
    private String korName;
    private String engName;
    private String discoverySite;
    private String imgAddress;

    @Builder
    private DinosaurResponse(Long id, String korName, String engName, String discoverySite, String imgAddress) {
        this.id = id;
        this.korName = korName;
        this.engName = engName;
        this.discoverySite = discoverySite;
        this.imgAddress = imgAddress;
    }

    public static DinosaurResponse from(Dinosaur dinosaur) {
        return DinosaurResponse.builder()
                .id(dinosaur.getId())
                .korName(dinosaur.getKorName())
                .engName(dinosaur.getEngName())
                .discoverySite(dinosaur.getDiscoverySite())
                .imgAddress(dinosaur.getImgAddress())
                .build();
    }

    @Override
    public int compareTo(DinosaurResponse dinosaurResponse) {
        return this.korName.compareTo(dinosaurResponse.getKorName());
    }
}
