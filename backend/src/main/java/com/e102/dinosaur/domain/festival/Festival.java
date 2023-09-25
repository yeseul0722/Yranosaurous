package com.e102.dinosaur.domain.festival;

import com.e102.dinosaur.controller.place.request.FestivalRequest;
import com.e102.dinosaur.domain.place.Place;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Festival {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private LocalDateTime startTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id")
    private Place place;

    @Builder
    public Festival(String name, LocalDateTime startTime, Place place) {
        this.name = name;
        this.startTime = startTime;
        this.place = place;
    }

    public void addPlace(Place place) {
        this.place = place;
    }

    public void modifyFestival(FestivalRequest festivalRequest, Place place) {
        this.name = festivalRequest.getName();
        this.startTime = festivalRequest.getStartTime();
    }
}
