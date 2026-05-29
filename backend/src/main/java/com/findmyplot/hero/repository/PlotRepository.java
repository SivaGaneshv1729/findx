package com.findmyplot.hero.repository;

import com.findmyplot.hero.model.Plot;
import com.findmyplot.hero.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface PlotRepository extends JpaRepository<Plot, UUID> {
    List<Plot> findByStatus(Plot.Status status);
    List<Plot> findByBroker(User broker);
}
