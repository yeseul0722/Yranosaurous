package com.e102.dinosaur.controller.animal.request;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ElastsicSearchAnimalRequest {

    @NotEmpty(message = "나라는 필수입니다.")
    private String country;

    @NotEmpty(message = "상위종은 필수입니다.")
    private String higherClass;
}
