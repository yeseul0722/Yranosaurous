package com.e102.dinosaur.domain.menu;

import com.e102.dinosaur.domain.restaurant.Restaurant;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restraunt_id")
    private Restaurant restaurant;

    private String name;
    private int price;

    public Menu(String name, int price) {
        this.name = name;
        this.price = price;
    }
}
