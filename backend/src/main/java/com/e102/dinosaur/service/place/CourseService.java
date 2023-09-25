package com.e102.dinosaur.service.place;

import com.e102.dinosaur.controller.place.request.CourseRequest;
import com.e102.dinosaur.domain.course.Course;
import com.e102.dinosaur.domain.course.CourseRepository;
import com.e102.dinosaur.domain.courseorder.CourseOrder;
import com.e102.dinosaur.domain.courseorder.CourseOrderRepository;
import com.e102.dinosaur.domain.place.Place;
import com.e102.dinosaur.domain.place.PlaceRepository;
import com.e102.dinosaur.exception.BaseException;
import com.e102.dinosaur.service.place.response.CourseResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CourseService {

    private final PlaceRepository placeRepository;
    private final CourseRepository courseRepository;
    private final CourseOrderRepository courseOrderRepository;

    public String saveCourse(CourseRequest courseRequest) {
        Course course = courseRequest.toEntity();
        List<CourseOrder> courseOrderList = courseRequest.getCourseOrderRequestList()
                .stream()
                .map(courseOrderRequest -> {
                    Place place = placeRepository.findById(courseOrderRequest.getPlaceId())
                            .orElseThrow(() -> new BaseException("존재하지 않는 장소입니다.", 7000));
                    CourseOrder courseOrder = courseOrderRequest.toEntity();
                    courseOrder.addPlace(place);
                    return courseOrder;
                }).toList();
        course.addCourseOrders(courseOrderList);
        courseRepository.save(course);
        return "저장에 성공했습니다.";
    }

    public List<CourseResponse> findCourses() {
        return courseRepository.findAll().stream()
                .map(CourseResponse::of)
                .toList();
    }

    public CourseResponse modifyCourse(CourseRequest courseRequest, Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new BaseException("존재하지 않는 코스입니다.", 7002));
        List<CourseOrder> courseOrderList = courseRequest.getCourseOrderRequestList()
                .stream()
                .map(courseOrderRequest -> {
                    Place place = placeRepository.findById(courseOrderRequest.getPlaceId())
                            .orElseThrow(() -> new BaseException("존재하지 않는 장소입니다.", 7000));
                    CourseOrder courseOrder = courseOrderRequest.toEntity();
                    courseOrder.addPlace(place);
                    return courseOrder;
                }).toList();
        course.modifyCourse(courseRequest, courseOrderList);
        return CourseResponse.of(course);
    }

    public void deleteCourse(Long courseId) {
        courseRepository.deleteById(courseId);
    }
}
