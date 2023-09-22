package com.e102.dinosaur.domain.elasticsearchanimal;

import java.util.List;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.repository.CrudRepository;

public interface ElasticSearchAnimalRepository extends ElasticsearchRepository<ElasticSearchAnimal, Long>,
        CrudRepository<ElasticSearchAnimal, Long> {

    List<ElasticSearchAnimal> findByCountryAndHigherClassificationContains(String country, String higherClass);
}
