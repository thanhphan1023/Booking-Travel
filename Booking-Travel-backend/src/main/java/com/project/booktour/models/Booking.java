package com.project.booktour.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "booking")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookingId")
    private Long bookingId;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private User user;

    @Column(name = "bookingDate", nullable = false)
    private LocalDate bookingDate;

    @Column(name = "numAdults", nullable = false)
    private Integer numAdults;

    @Column(name = "numChildren", nullable = false)
    private Integer numChildren;

    @Column(name = "totalPrice", nullable = false)
    private Double totalPrice;

    @Column(name = "bookingStatus", length = 255, nullable = false)
    private String bookingStatus;

    @Column(name = "specialRequests", length = 255)
    private String specialRequests;

    @ManyToOne
    @JoinColumn(name = "tourId", nullable = false)
    private Tour tour;

    @ManyToOne
    @JoinColumn(name = "promotionId")
    private Promotion promotion;
}