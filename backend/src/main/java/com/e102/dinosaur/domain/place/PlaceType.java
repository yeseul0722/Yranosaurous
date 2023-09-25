package com.e102.dinosaur.domain.place;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@lombok.Generated
public enum PlaceType {

    CONV("편의 시설"), PREVIEW("관람 요소");

    private final String text;
}
