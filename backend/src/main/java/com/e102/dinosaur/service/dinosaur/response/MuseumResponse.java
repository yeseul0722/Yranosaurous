package com.e102.dinosaur.service.dinosaur.response;

import com.e102.dinosaur.domain.dinosaursupermuseum.DinosaurMuseum;
import com.e102.dinosaur.domain.museum.Museum;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MuseumResponse {

    private Long id;
    private String name;
    private String url;
    private String address;
    private String phoneNumber;
    private String imgAddress;

    @Builder
    private MuseumResponse(Long id, String name, String url, String address, String phoneNumber,
            String imgAddress) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.imgAddress = imgAddress;
    }

    public static MuseumResponse from(DinosaurMuseum dinosaurMuseum) {
        Museum museum = dinosaurMuseum.getMuseum();

        return MuseumResponse.builder()
                .id(museum.getId())
                .name(museum.getName())
                .url(museum.getUrl())
                .address(museum.getAddress())
                .phoneNumber(museum.getPhoneNumber())
                .imgAddress(museum.getImgAddress())
                .build();
    }
}
