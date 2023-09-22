package com.e102.dinosaur.controller.animal;

import com.e102.dinosaur.controller.animal.request.ElastsicSearchAnimalRequest;
import com.e102.dinosaur.domain.elasticsearchanimal.ElasticSearchAnimal;
import com.e102.dinosaur.service.elasticsearchanimal.ElasticSearchAnimalService;
import com.e102.dinosaur.utils.ApiResponse;
import com.e102.dinosaur.utils.ApiUtils;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ElasticSearchAnimalController {

    private final ElasticSearchAnimalService elasticSearchAnimalService;

    @PostMapping("/elasticsearch/animals")
    public ApiResponse<List<ElasticSearchAnimal>> getElasticAnimalsBy(@Valid @RequestBody
    ElastsicSearchAnimalRequest elastsicSearchAnimalRequest) {
        return ApiUtils.success(elasticSearchAnimalService.getElasticSearchAnimalsBy(
                elastsicSearchAnimalRequest.getCountry(),
                elastsicSearchAnimalRequest.getHigherClass()));
    }
}
