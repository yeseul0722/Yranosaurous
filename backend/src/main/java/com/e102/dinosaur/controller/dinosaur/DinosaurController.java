package com.e102.dinosaur.controller.dinosaur;

import com.e102.dinosaur.service.dinosaur.DinosaurService;
import com.e102.dinosaur.service.dinosaur.response.DinosaurDetailResponse;
import com.e102.dinosaur.service.dinosaur.response.DinosaurResponse;
import com.e102.dinosaur.service.dinosaur.response.DinosaurSubResponse;
import com.e102.dinosaur.utils.ApiResponse;
import com.e102.dinosaur.utils.ApiUtils;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class DinosaurController {

    private final DinosaurService dinosaurService;

    @GetMapping("/dinosaurs")
    public ApiResponse<List<DinosaurResponse>> getDinosaurs() {
        return ApiUtils.success(dinosaurService.getDinosaurs());
    }

    @GetMapping("/dinosaur/{id}")
    public ApiResponse<DinosaurDetailResponse> getDinosaur(@PathVariable Long id) {
        return ApiUtils.success(dinosaurService.getDinosaur(id));
    }

    @GetMapping("/dinosaurSub/{name}")
    public ApiResponse<List<DinosaurSubResponse>> getDinosaurSubBy(@PathVariable String name) {
        System.out.println(name);
        return ApiUtils.success(dinosaurService.getDinosaurSubsBy(name));
    }

}
