package com.e102.dinosaur.controller.tour;

import com.e102.dinosaur.service.tour.TourService;
import com.e102.dinosaur.service.tour.response.TourDetailResponse;
import com.e102.dinosaur.service.tour.response.TourResponse;
import com.e102.dinosaur.utils.ApiResponse;
import com.e102.dinosaur.utils.ApiUtils;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class TourController {

    private final TourService tourService;

    @GetMapping("/tours")
    public ApiResponse<List<TourResponse>> getTours() {
        return ApiUtils.success(tourService.getTours());
    }

    @GetMapping("/tours/{category}")
    public ApiResponse<List<TourResponse>> getToursByCategory(@PathVariable String category) {
        return ApiUtils.success(tourService.getToursBy(category));
    }

    @GetMapping("/tour/{id}")
    public ApiResponse<TourDetailResponse> getTour(@PathVariable Long id) {
        return ApiUtils.success(tourService.getTour(id));
    }
}
