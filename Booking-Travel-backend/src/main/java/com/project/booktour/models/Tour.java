package com.project.booktour.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tours")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tourId")
    private Long tourId;

    @Column(name = "title", length = 255, nullable = false)
    private String title;

    @Column(name = "description", columnDefinition = "LONGTEXT", nullable = false)
    private String description;

    @Column(name = "image", length = 255, nullable = false)
    private String image;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "priceAdult", nullable = false)
    private Double priceAdult;

    @Column(name = "priceChild", nullable = false)
    private Double priceChild;

    @Column(name = "duration", length = 255, nullable = false)
    private String duration;

    @Column(name = "destination", length = 255, nullable = false)
    private String destination;

    @Column(name = "availability", nullable = false)
    private Boolean availability = true;

    @Column(name = "itinerary", length = 255, nullable = false)
    private String itinerary;

    @Column(name = "reviews", length = 255)
    private String reviews;
}