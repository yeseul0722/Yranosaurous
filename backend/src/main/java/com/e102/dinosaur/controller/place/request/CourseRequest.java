package com.e102.dinosaur.controller.place.request;


import com.e102.dinosaur.domain.course.Course;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class CourseRequest {

    private String name;
    private int timeTaken;
    private List<CourseOrderRequest> courseOrderRequestList;

    public Course toEntity() {
        return Course.builder()
                .name(name)
                .timeTaken(timeTaken)
                .build();
    }
}
