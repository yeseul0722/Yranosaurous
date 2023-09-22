package com.e102.dinosaur.service.place.response;

import com.e102.dinosaur.domain.course.Course;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseResponse {

    private Long id;
    private String name;
    private int timeTaken;
    private List<CourseOrderResponse> courseOrderList;

    public static CourseResponse of(Course course) {
        return CourseResponse.builder()
                .id(course.getId())
                .name(course.getName())
                .timeTaken(course.getTimeTaken())
                .courseOrderList(course.getCourseOrderList()
                        .stream()
                        .map(CourseOrderResponse::of)
                        .toList())
                .build();
    }

}
