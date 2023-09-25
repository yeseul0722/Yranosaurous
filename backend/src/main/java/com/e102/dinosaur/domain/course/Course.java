package com.e102.dinosaur.domain.course;

import com.e102.dinosaur.controller.place.request.CourseRequest;
import com.e102.dinosaur.domain.courseorder.CourseOrder;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int timeTaken;

    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CourseOrder> courseOrderList;

    @Builder
    public Course(String name, int timeTaken, List<CourseOrder> courseOrderList) {
        this.name = name;
        this.timeTaken = timeTaken;
        this.courseOrderList = courseOrderList;
    }

    public void addCourseOrder(CourseOrder courseOrder) {
        if (courseOrderList == null) {
            courseOrderList = new ArrayList<>();
        }
        courseOrder.addCourse(this);
        courseOrderList.add(courseOrder);
    }

    public void addCourseOrders(List<CourseOrder> courseOrderList) {
        courseOrderList.forEach(courseOrder -> courseOrder.addCourse(this));
        this.courseOrderList = courseOrderList;
    }

    public void modifyCourse(CourseRequest courseRequest, List<CourseOrder> courseOrderList) {
        this.name = courseRequest.getName();
        this.timeTaken = courseRequest.getTimeTaken();
        if (this.courseOrderList == null) {
            this.courseOrderList = new ArrayList<>();
        }
        this.courseOrderList.clear();
        courseOrderList.forEach(courseOrder -> courseOrder.addCourse(this));
        this.courseOrderList.addAll(courseOrderList);
    }
}
