package com.e102.dinosaur.controller.place;

import com.e102.dinosaur.controller.place.request.CourseRequest;
import com.e102.dinosaur.controller.place.request.FestivalRequest;
import com.e102.dinosaur.controller.place.request.PlaceRequest;
import com.e102.dinosaur.service.place.CourseService;
import com.e102.dinosaur.service.place.FestivalService;
import com.e102.dinosaur.service.place.PlaceService;
import com.e102.dinosaur.utils.ApiResponse;
import com.e102.dinosaur.utils.ApiUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class PlaceController {

    private final PlaceService placeService;
    private final FestivalService festivalService;
    private final CourseService courseService;

    @PostMapping("/place")
    public ApiResponse<?> placeAdd(@RequestBody PlaceRequest placeRequest) {
        return ApiUtils.success(placeService.savePlace(placeRequest));
    }

    @PostMapping("/festival")
    public ApiResponse<?> festivalAdd(@RequestBody FestivalRequest festivalRequest) {
        return ApiUtils.success(festivalService.saveFestival(festivalRequest));
    }

    @PostMapping("/course")
    public ApiResponse<?> courseAdd(@RequestBody CourseRequest courseRequest) {
        return ApiUtils.success(courseService.saveCourse(courseRequest));
    }

    @GetMapping("/places")
    public ApiResponse<?> placeList() {
        return ApiUtils.success(placeService.findPlaces());
    }

    @GetMapping("/festivals")
    public ApiResponse<?> festivalList() {
        return ApiUtils.success(festivalService.findFestivals());
    }


    @GetMapping("/festival/{startTime}")
    public ApiResponse<?> festivalList(@DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable LocalDate startTime) {
        return ApiUtils.success(festivalService.findFestival(startTime));
    }

    @GetMapping("/courses")
    public ApiResponse<?> courseList() {
        return ApiUtils.success(courseService.findCourses());
    }

    @PutMapping("/place/{placeId}")
    public ApiResponse<?> placeModify(@PathVariable Long placeId, @RequestBody PlaceRequest placeRequest) {
        return ApiUtils.success(placeService.modifyPlace(placeRequest, placeId));
    }

    @PutMapping("/festival/{festivalId}")
    public ApiResponse<?> festivalModify(@PathVariable Long festivalId, @RequestBody FestivalRequest festivalRequest) {
        return ApiUtils.success(festivalService.modifyFestival(festivalRequest, festivalId));
    }

    @PutMapping("/course/{courseId}")
    public ApiResponse<?> courseModify(@PathVariable Long courseId, @RequestBody CourseRequest courseRequest) {
        return ApiUtils.success(courseService.modifyCourse(courseRequest, courseId));
    }

    @DeleteMapping("/place/{placeId}")
    public ApiResponse<?> placeDelete(@PathVariable Long placeId) {
        placeService.deletePlace(placeId);
        return ApiUtils.success("삭제 성공");
    }

    @DeleteMapping("/festival/{festivalId}")
    public ApiResponse<?> festivalDelete(@PathVariable Long festivalId) {
        festivalService.deleteFestival(festivalId);
        return ApiUtils.success("삭제 성공");
    }

    @DeleteMapping("/course/{courseId}")
    public ApiResponse<?> courseDelete(@PathVariable Long courseId) {
        courseService.deleteCourse(courseId);
        return ApiUtils.success("삭제 성공");
    }

}
