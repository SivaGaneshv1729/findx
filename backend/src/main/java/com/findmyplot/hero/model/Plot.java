package com.findmyplot.hero.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "plots")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Plot {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "broker_id", nullable = false)
    private User broker;

    @Column(nullable = false)
    private String title;

    private String description;

    private String price;

    private Double areaSqYds;

    private String facing;

    private Double lat;

    private Double lng;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Status status = Status.ACTIVE;

    @Builder.Default
    private Boolean isDroneVerified = false;

    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public enum Status {
        ACTIVE,
        SOLD,
        HIDDEN
    }
}
