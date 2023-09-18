package com.e102.dinosaur.domain.dinosaursub;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DinosaurSubRepository extends JpaRepository<DinosaurSub, Long> {
}
