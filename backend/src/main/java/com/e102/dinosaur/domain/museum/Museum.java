package com.e102.dinosaur.domain.museum;

import com.e102.dinosaur.domain.dinosaursupermuseum.DinosaurMuseum;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Museum {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String url;
    private String address;
    private String phoneNumber;
    private String imgAddress;

    @OneToMany(mappedBy = "museum", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<DinosaurMuseum> dinosaurMuseums;

    public Museum(String name, String url, String address, String phoneNumber, String imgAddress) {
        this.name = name;
        this.url = url;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.imgAddress = imgAddress;
    }
}
