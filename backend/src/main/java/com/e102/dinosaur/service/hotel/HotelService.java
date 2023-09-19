package com.e102.dinosaur.service.hotel;

import com.e102.dinosaur.domain.hotel.HotelRepository;
import com.e102.dinosaur.exception.BaseException;
import com.e102.dinosaur.service.hotel.response.HotelResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class HotelService {

    private final HotelRepository hotelRepository;

    public List<HotelResponse> findHotel() {
        return hotelRepository.findAll().stream()
                .map(HotelResponse::of)
                .toList();
    }

    public HotelResponse findOneHotel(Long id) {
        return HotelResponse.of(hotelRepository.findById(id)
                .orElseThrow(() -> new BaseException("존재하지 않는 숙소압니다.", 3000))
        );
    }
}
