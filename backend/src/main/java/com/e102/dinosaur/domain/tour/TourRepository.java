package com.e102.dinosaur.domain.tour;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TourRepository extends JpaRepository<Tour, Long> {

    List<Tour> findAllByCategoryIs(String category);
}
