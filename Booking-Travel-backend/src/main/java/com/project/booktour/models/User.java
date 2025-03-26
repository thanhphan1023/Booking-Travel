package com.project.booktour.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class User extends BaseEntity implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Long userId;

    @Column(name = "userName", length = 50, nullable = false)
    private String userName;

    @Column(name = "password", length = 255, nullable = false)
    private String password;

    @Column(name = "email", length = 255, nullable = false)
    private String email;

    @Column(name = "phoneNumber", length = 15, nullable = false)
    private String phoneNumber;

    @Column(name = "address", length = 255, nullable = false)
    private String address;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "facebook_account_id")
    private Integer facebookAccountId = 0;

    @Column(name = "google_account_id")
    private Integer googleAccountId = 0;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
     authorities.add( new SimpleGrantedAuthority("ROLE_"+getRole().getName().toUpperCase()));
//        authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        return authorities;
    }
    @Override
    public String getUsername() {
        return phoneNumber;
    }
}
