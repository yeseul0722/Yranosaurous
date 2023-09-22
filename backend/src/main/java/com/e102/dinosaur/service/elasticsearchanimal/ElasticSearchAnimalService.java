package com.e102.dinosaur.service.elasticsearchanimal;

import com.e102.dinosaur.domain.elasticsearchanimal.ElasticSearchAnimal;
import com.e102.dinosaur.domain.elasticsearchanimal.ElasticSearchAnimalRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class ElasticSearchAnimalService {

    private final ElasticSearchAnimalRepository elasticSearchAnimalRepository;

    public List<ElasticSearchAnimal> getElasticSearchAnimalsBy(String country, String higherClass) {
        return elasticSearchAnimalRepository.findByCountryAndHigherClassificationContains(country, higherClass);
    }
}
