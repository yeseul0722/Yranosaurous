package com.e102.dinosaur.service;

import com.e102.dinosaur.domain.restaurant.RestaurantRepository;
import com.e102.dinosaur.service.response.AbstractRestaurantResponse;
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
}
