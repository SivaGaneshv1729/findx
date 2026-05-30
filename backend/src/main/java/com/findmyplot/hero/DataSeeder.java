package com.findmyplot.hero;

import com.findmyplot.hero.model.Plot;
import com.findmyplot.hero.model.User;
import com.findmyplot.hero.repository.PlotRepository;
import com.findmyplot.hero.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PlotRepository plotRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            // Create Super Admin
            User admin = User.builder()
                    .email("admin@findmyplot.com")
                    .passwordHash(passwordEncoder.encode("admin123"))
                    .fullName("Super Admin")
                    .role(User.Role.SUPER_ADMIN)
                    .build();
            userRepository.save(admin);

            // Create a Dealer
            User dealer = User.builder()
                    .email("dealer@example.com")
                    .passwordHash(passwordEncoder.encode("dealer123"))
                    .fullName("John Dealer")
                    .role(User.Role.DEALER)
                    .brokerCompanyName("Premium Estates")
                    .build();
            userRepository.save(dealer);

            // Seed some plots
            plotRepository.saveAll(List.of(
                Plot.builder().title("Emerald Greens Phase II").price("₹45 Lakhs").areaSqYds(200.0).facing("East Facing").lat(17.0425).lng(81.8228).status(Plot.Status.ACTIVE).broker(dealer).isDroneVerified(true).build(),
                Plot.builder().title("Sapphire Enclave").price("₹62 Lakhs").areaSqYds(250.0).facing("North Facing").lat(17.0555).lng(81.8328).status(Plot.Status.ACTIVE).broker(dealer).isDroneVerified(false).build(),
                Plot.builder().title("Godavari Riverside Plots").price("₹85 Lakhs").areaSqYds(300.0).facing("East Facing").lat(17.0305).lng(81.8108).status(Plot.Status.ACTIVE).broker(dealer).isDroneVerified(true).build(),
                Plot.builder().title("Sunrise Valley Layout").price("₹32 Lakhs").areaSqYds(150.0).facing("West Facing").lat(17.0485).lng(81.8028).status(Plot.Status.ACTIVE).broker(dealer).isDroneVerified(true).build(),
                Plot.builder().title("Downtown Commercial Plot").price("₹1.2 Crores").areaSqYds(400.0).facing("South Facing").lat(17.0150).lng(81.7900).status(Plot.Status.ACTIVE).broker(dealer).isDroneVerified(false).build(),
                Plot.builder().title("Green Meadows").price("₹28 Lakhs").areaSqYds(180.0).facing("North Facing").lat(17.0600).lng(81.8400).status(Plot.Status.ACTIVE).broker(dealer).isDroneVerified(true).build()
            ));
        }
    }
}
