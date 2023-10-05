package com.e102.dinosaur.domain.festival;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface FestivalRepository extends JpaRepository<Festival, Long> {

    List<Festival> findByStartTimeBetweenOrderByStartTimeAsc(LocalDateTime start, LocalDateTime end);
}
