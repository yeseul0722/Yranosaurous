package com.e102.dinosaur.service.restaurant;

import com.e102.dinosaur.domain.hashtag.QHashTag;
import com.e102.dinosaur.domain.menu.QMenu;
import com.e102.dinosaur.domain.restaurant.QRestaurant;
import com.e102.dinosaur.domain.restaurant.Restaurant;
import com.e102.dinosaur.domain.restaurant.RestaurantRepository;
import com.e102.dinosaur.domain.review.QReview;
import com.e102.dinosaur.exception.BaseException;
import com.e102.dinosaur.service.restaurant.response.AbstractRestaurantResponse;
import com.e102.dinosaur.service.restaurant.response.RestaurantDetailResponse;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;
    private final EntityManager entityManager;

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

    public List<AbstractRestaurantResponse> findRestaurantByHashTag(String hashTag) {
        System.out.println("asdfasdf");
        JPAQuery<Restaurant> query = new JPAQuery<>(entityManager);
//        JPAQueryFactory queryFactory = new JPAQueryFactory(entityManager);
        log.info(hashTag);
        QRestaurant qRestaurant = QRestaurant.restaurant;
        QHashTag qHashTag = QHashTag.hashTag;
        QMenu qMenu = QMenu.menu;
        QReview qReview = QReview.review;
        List<Restaurant> restaurantList = query.select(qRestaurant)
                .from(qRestaurant)
                .join(qRestaurant.hashTags, qHashTag).fetchJoin()
                .where(qHashTag.name.like("%" + hashTag + "%"))
                .fetch();
        return restaurantList.stream().map(AbstractRestaurantResponse::of)
                .toList();
    }
}
