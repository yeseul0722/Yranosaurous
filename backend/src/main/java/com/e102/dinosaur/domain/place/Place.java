package com.e102.dinosaur.domain.place;

import com.e102.dinosaur.domain.courseorder.CourseOrder;
import com.e102.dinosaur.domain.festival.Festival;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String longitude;
    private String latitude;
    private int markerNumber;

    @Column(columnDefinition = "TEXT")
    private String imgAddress;
    private String content;

    @Enumerated(EnumType.STRING)
    private PlaceType type;

    @OneToMany(mappedBy = "place", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Festival> festivalList;

    @OneToMany(mappedBy = "place", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<CourseOrder> courseOrderList;

    @Builder
    public Place(String name, String longitude, String latitude, String imgAddress, String content, int markerNumber,
            PlaceType type, List<Festival> festivalList, List<CourseOrder> courseOrderList) {
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
        this.imgAddress = imgAddress;
        this.content = content;
        this.type = type;
        this.festivalList = festivalList;
        this.courseOrderList = courseOrderList;
        this.markerNumber = markerNumber;
    }
}
