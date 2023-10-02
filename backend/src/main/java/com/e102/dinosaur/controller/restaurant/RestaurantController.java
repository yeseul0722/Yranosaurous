package com.e102.dinosaur.controller.restaurant;


import com.e102.dinosaur.service.restaurant.RestaurantService;
import com.e102.dinosaur.service.restaurant.response.AbstractRestaurantResponse;
import com.e102.dinosaur.service.restaurant.response.RestaurantDetailResponse;
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
public class RestaurantController {

    private final RestaurantService restaurantService;

    @GetMapping("/restaurant/{category}")
    public ApiResponse<List<AbstractRestaurantResponse>> restaurantsList(@PathVariable int category) {
        return ApiUtils.success(restaurantService.findRestaurant(category));
    }

    @GetMapping("/restaurant/detail/{id}")
    public ApiResponse<RestaurantDetailResponse> restaurantDetails(@PathVariable Long id) {
        return ApiUtils.success(restaurantService.findOneRestaurant(id));
    }

    @GetMapping("/restaurant/hashtag/{hashTag}")
    public ApiResponse<?> restaurantDetailsByHashTag(@PathVariable String hashTag) {
        return ApiUtils.success(restaurantService.findRestaurantByHashTag(hashTag));
    }

}
