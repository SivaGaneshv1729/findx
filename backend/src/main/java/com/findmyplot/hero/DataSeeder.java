package com.findmyplot.hero;

import com.findmyplot.hero.model.Plot;
import com.findmyplot.hero.model.User;
import com.findmyplot.hero.repository.PlotRepository;
import com.findmyplot.hero.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

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
            Plot plot1 = Plot.builder()
                    .title("Emerald Greens Phase II")
                    .price("₹45 Lakhs")
                    .areaSqYds(200.0)
                    .facing("East Facing")
                    .lat(17.0435)
                    .lng(81.8235)
                    .status(Plot.Status.ACTIVE)
                    .broker(dealer)
                    .isDroneVerified(true)
                    .build();
            plotRepository.save(plot1);

            Plot plot2 = Plot.builder()
                    .title("Sapphire Enclave")
                    .price("₹62 Lakhs")
                    .areaSqYds(250.0)
                    .facing("North Facing")
                    .lat(17.0410)
                    .lng(81.8200)
                    .status(Plot.Status.ACTIVE)
                    .broker(dealer)
                    .isDroneVerified(false)
                    .build();
            plotRepository.save(plot2);
        }
    }
}
