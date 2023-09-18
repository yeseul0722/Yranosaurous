package com.e102.dinosaur.service.dinosaur.response;

import com.e102.dinosaur.domain.dinosaur.Dinosaur;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DinosaurResponse {

    private Long id;
    private String korName;
    private String imgAddress;

    @Builder
    private DinosaurResponse(Long id, String korName, String imgAddress) {
        this.id = id;
        this.korName = korName;
        this.imgAddress = imgAddress;
    }

    public static DinosaurResponse from(Dinosaur dinosaur) {
        return DinosaurResponse.builder()
                .id(dinosaur.getId())
                .korName(dinosaur.getKorName())
                .imgAddress(dinosaur.getImgAddress())
                .build();
    }
}
