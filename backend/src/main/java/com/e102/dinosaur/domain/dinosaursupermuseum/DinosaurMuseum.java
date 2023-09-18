package com.e102.dinosaur.domain.dinosaursupermuseum;

import com.e102.dinosaur.domain.dinosaur.Dinosaur;
import com.e102.dinosaur.domain.museum.Museum;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class DinosaurMuseum {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dinosaur_id")
    private Dinosaur dinosaur;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "museum_id")
    private Museum museum;

    public DinosaurMuseum(Dinosaur dinosaur, Museum museum) {
        this.dinosaur = dinosaur;
        this.museum = museum;
    }
}
