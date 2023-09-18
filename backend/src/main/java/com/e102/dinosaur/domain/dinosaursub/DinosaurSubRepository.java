package com.e102.dinosaur.domain.dinosaursub;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DinosaurSubRepository extends JpaRepository<DinosaurSub, Long> {

    List<DinosaurSub> findAllByScientificNameContains(String name);
}
