package com.e102.dinosaur.service;

import com.e102.dinosaur.domain.restaurant.RestaurantRepository;
import com.e102.dinosaur.exception.BaseException;
import com.e102.dinosaur.service.response.AbstractRestaurantResponse;
import com.e102.dinosaur.service.response.RestaurantDetailResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;

    public List<AbstractRestaurantResponse> findRestaurant(int category) {
        return restaurantRepository.findRestaurantByCategoryOrderByScoreDesc(category).stream()
                .map(AbstractRestaurantResponse::of)
                .toList();
    }

    public RestaurantDetailResponse findOneRestaurant(Long id) {
        return RestaurantDetailResponse.of(restaurantRepository.findById(id)
                .orElseThrow(() -> new BaseException("존재하지 않는 맛집입니다", 1000))
        );
    }
}
