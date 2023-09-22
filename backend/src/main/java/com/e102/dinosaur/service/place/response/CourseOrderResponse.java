package com.e102.dinosaur.service.place.response;


import com.e102.dinosaur.domain.courseorder.CourseOrder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseOrderResponse {

    private Long id;
    private int sequence;
    private PlaceResponse place;

    public static CourseOrderResponse of(CourseOrder courseOrder) {
        return CourseOrderResponse.builder()
                .id(courseOrder.getId())
                .sequence(courseOrder.getSequence())
                .place(PlaceResponse.of(courseOrder.getPlace()))
                .build();
    }
}
