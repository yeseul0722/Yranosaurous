package com.e102.dinosaur.domain.courseorder;

import com.e102.dinosaur.domain.course.Course;
import com.e102.dinosaur.domain.place.Place;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class CourseOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int sequence;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id")
    private Place place;

    @Builder
    public CourseOrder(int sequence) {
        this.sequence = sequence;
    }

    public void addCourse(Course course) {
        this.course = course;
    }

    public void addPlace(Place place) {
        this.place = place;
    }

}
