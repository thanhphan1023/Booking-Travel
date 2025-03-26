package com.project.booktour.configurations;

import com.project.booktour.files.JwtTokenFilter;
import com.project.booktour.models.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.http.HttpMethod.*;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {
    private final JwtTokenFilter jwtTokenFilter;

    @Value("${api.prefix}")
    private String apiPrefix;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class)
                .authorizeHttpRequests(requests -> {
                    requests
                            // Các endpoint công khai (không cần token)
                            .requestMatchers(
                                    String.format("%s/users/register", apiPrefix),
                                    String.format("%s/users/login", apiPrefix),
                                    String.format("%s/tours/**", apiPrefix) + "/**" // Cho phép GET tours công khai
                            ).permitAll()

                            // Tours (quản lý tour)
                            .requestMatchers(GET, String.format("%s/tours/**", apiPrefix)).permitAll() // Mọi người có thể xem tour
                            .requestMatchers(POST, String.format("%s/tours/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(PUT, String.format("%s/tours/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(DELETE, String.format("%s/tours/**", apiPrefix)).hasRole("ADMIN")

                            // Booking (đặt tour)
                            .requestMatchers(POST, String.format("%s/booking/**", apiPrefix)).hasRole("USER") // User đặt tour
                            .requestMatchers(GET, String.format("%s/booking/**", apiPrefix)).hasAnyRole("USER", "ADMIN") // User xem booking của mình, Admin xem tất cả
                            .requestMatchers(PUT, String.format("%s/booking/**", apiPrefix)).hasRole("ADMIN") // Chỉ Admin cập nhật
                            .requestMatchers(DELETE, String.format("%s/booking/**", apiPrefix)).hasRole("ADMIN") // Chỉ Admin xóa

                            // Promotion (khuyến mãi)
                            .requestMatchers(GET, String.format("%s/promotion/**", apiPrefix)).hasAnyRole("USER", "ADMIN") // User và Admin xem
                            .requestMatchers(POST, String.format("%s/promotion/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(PUT, String.format("%s/promotion/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(DELETE, String.format("%s/promotion/**", apiPrefix)).hasRole("ADMIN")

                            // Reviews (đánh giá tour)
                            .requestMatchers(POST, String.format("%s/reviews/**", apiPrefix)).hasRole("USER") // User gửi đánh giá
                            .requestMatchers(GET, String.format("%s/reviews/**", apiPrefix)).permitAll() // Mọi người xem đánh giá
                            .requestMatchers(PUT, String.format("%s/reviews/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(DELETE, String.format("%s/reviews/**", apiPrefix)).hasRole("ADMIN")

                            // History (lịch sử hành động)
                            .requestMatchers(GET, String.format("%s/history/**", apiPrefix)).hasAnyRole("USER", "ADMIN") // User xem lịch sử của mình, Admin xem tất cả
                            .requestMatchers(POST, String.format("%s/history/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(PUT, String.format("%s/history/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(DELETE, String.format("%s/history/**", apiPrefix)).hasRole("ADMIN")

                            // Invoice (hóa đơn)
                            .requestMatchers(GET, String.format("%s/invoice/**", apiPrefix)).hasAnyRole("USER", "ADMIN") // User xem hóa đơn của mình
                            .requestMatchers(POST, String.format("%s/invoice/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(PUT, String.format("%s/invoice/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(DELETE, String.format("%s/invoice/**", apiPrefix)).hasRole("ADMIN")

                            // Checkout (thanh toán)
                            .requestMatchers(POST, String.format("%s/checkout/**", apiPrefix)).hasRole("USER") // User thực hiện thanh toán
                            .requestMatchers(GET, String.format("%s/checkout/**", apiPrefix)).hasAnyRole("USER", "ADMIN")
                            .requestMatchers(PUT, String.format("%s/checkout/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(DELETE, String.format("%s/checkout/**", apiPrefix)).hasRole("ADMIN")

                            // Tokens (quản lý token, nếu có)
                            .requestMatchers(GET, String.format("%s/tokens/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(POST, String.format("%s/tokens/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(PUT, String.format("%s/tokens/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(DELETE, String.format("%s/tokens/**", apiPrefix)).hasRole("ADMIN")

                            // Social Accounts (quản lý tài khoản xã hội)
                            .requestMatchers(GET, String.format("%s/social_accounts/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(POST, String.format("%s/social_accounts/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(PUT, String.format("%s/social_accounts/**", apiPrefix)).hasRole("ADMIN")
                            .requestMatchers(DELETE, String.format("%s/social_accounts/**", apiPrefix)).hasRole("ADMIN")

                            // Yêu cầu xác thực cho các request còn lại
                            .anyRequest().authenticated();
                });

        return http.build();
    }
}