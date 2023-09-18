package com.e102.dinosaur.domain.restaurant;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    List<Restaurant> findRestaurantByCategoryOrderByScoreDesc(int category);
}
