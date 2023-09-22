package com.e102.dinosaur.controller.place.request;

import com.e102.dinosaur.domain.courseorder.CourseOrder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class CourseOrderRequest {

    private int sequence;
    private Long placeId;

    public CourseOrder toEntity() {
        return CourseOrder.builder()
                .sequence(sequence)
                .build();
    }
}
