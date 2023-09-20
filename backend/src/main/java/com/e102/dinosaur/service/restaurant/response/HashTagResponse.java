package com.e102.dinosaur.service.restaurant.response;


import com.e102.dinosaur.domain.hashtag.HashTag;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class HashTagResponse {

    private Long id;
    private String name;

    @Builder
    public HashTagResponse(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public static HashTagResponse of(HashTag hashTag) {
        return HashTagResponse.builder()
                .id(hashTag.getId())
                .name(hashTag.getName())
                .build();
    }
}
