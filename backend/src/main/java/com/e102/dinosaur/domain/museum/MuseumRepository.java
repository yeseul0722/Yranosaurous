package com.e102.dinosaur.domain.museum;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MuseumRepository extends JpaRepository<Museum, Long> {

    Optional<Museum> findByName(String name);
}
