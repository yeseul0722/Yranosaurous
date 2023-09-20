package com.e102.dinosaur.controller.hotel;

import com.e102.dinosaur.service.hotel.HotelService;
import com.e102.dinosaur.service.hotel.response.HotelResponse;
import com.e102.dinosaur.utils.ApiResponse;
import com.e102.dinosaur.utils.ApiUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class HotelController {

    private final HotelService hotelService;

    @GetMapping("/hotel")
    public ApiResponse<List<HotelResponse>> hotelList() {
        return ApiUtils.success(hotelService.findHotel());
    }

    @GetMapping("/hotel/detail/{id}")
    public ApiResponse<HotelResponse> hotelDetails(@PathVariable Long id) {
        return ApiUtils.success(hotelService.findOneHotel(id));
    }

}
