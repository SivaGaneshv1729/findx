package com.findmyplot.hero.controller;

import com.findmyplot.hero.model.Plot;
import com.findmyplot.hero.repository.PlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/plots")
public class PlotController {

    @Autowired
    private PlotRepository plotRepository;

    // Public access to view all active plots
    @GetMapping
    public ResponseEntity<List<Plot>> getAllActivePlots() {
        return ResponseEntity.ok(plotRepository.findByStatus(Plot.Status.ACTIVE));
    }

    // Public access to view a specific plot
    @GetMapping("/{id}")
    public ResponseEntity<Plot> getPlotById(@PathVariable UUID id) {
        return plotRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Broker/Admin access to create a plot
    @PostMapping
    @PreAuthorize("hasAnyRole('SUPER_ADMIN', 'BROKER')")
    public ResponseEntity<Plot> createPlot(@RequestBody Plot plot) {
        // In a real scenario, we would set the broker from the authenticated user
        return ResponseEntity.ok(plotRepository.save(plot));
    }

    // Super Admin access to verify a plot
    @PatchMapping("/{id}/verify")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<Plot> verifyPlot(@PathVariable UUID id) {
        return plotRepository.findById(id)
                .map(plot -> {
                    plot.setIsDroneVerified(true);
                    return ResponseEntity.ok(plotRepository.save(plot));
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
