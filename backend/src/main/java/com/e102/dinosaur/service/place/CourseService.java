package com.e102.dinosaur.service.place;

import com.e102.dinosaur.controller.place.request.CourseRequest;
import com.e102.dinosaur.domain.course.Course;
import com.e102.dinosaur.domain.course.CourseRepository;
import com.e102.dinosaur.domain.courseorder.CourseOrder;
import com.e102.dinosaur.domain.courseorder.CourseOrderRepository;
import com.e102.dinosaur.domain.place.Place;
import com.e102.dinosaur.domain.place.PlaceRepository;
import com.e102.dinosaur.exception.BaseException;
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

    public String saveCourser(CourseRequest courseRequest) {
        Course course = courseRequest.toEntity();
        System.out.println("???");
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
}
