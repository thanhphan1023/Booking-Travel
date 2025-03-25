package com.project.booktour.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "checkout")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Checkout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "checkoutId")
    private Long checkoutId;

    @ManyToOne
    @JoinColumn(name = "bookingId", nullable = false)
    private Booking booking;

    @Column(name = "paymentMethod", length = 255, nullable = false)
    private String paymentMethod;

    @Column(name = "paymentDetails", length = 255, nullable = false)
    private String paymentDetails;

    @Column(name = "paymentDate", nullable = false)
    private LocalDateTime paymentDate = LocalDateTime.now();

    @Column(name = "amount", nullable = false)
    private Double amount;

    @Column(name = "paymentStatus", length = 255, nullable = false)
    private String paymentStatus;

    @Column(name = "transactionId", length = 255, nullable = false)
    private String transactionId;
}