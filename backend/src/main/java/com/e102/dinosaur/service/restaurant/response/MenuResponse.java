package com.e102.dinosaur.service.restaurant.response;

import com.e102.dinosaur.domain.menu.Menu;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MenuResponse {

    private Long id;
    private String name;
    private String price;

    @Builder
    public MenuResponse(Long id, String name, String price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public static MenuResponse of(Menu menu) {
        return MenuResponse.builder()
                .id(menu.getId())
                .name(menu.getName())
                .price(menu.getPrice())
                .build();
    }
}
