package com.project.booktour.components;

import com.project.booktour.exceptions.InvalidParamException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
@RequiredArgsConstructor
public class JwtTokenUtil {
    @Value("${jwt.expiration}")
    private Long expiration;

    @Value("${jwt.secretky}") // Sửa lỗi chính tả nếu cần trong application.properties thành "secretkey"
    private String secretKey;

    public String generateToken(com.project.booktour.models.User user) throws InvalidParamException {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userName", user.getUsername());
        try {
            String token = Jwts.builder()
                    .setClaims(claims)
                    .setSubject(user.getUsername()) // Dùng userName làm subject
                    .setIssuedAt(new Date(System.currentTimeMillis()))
                    .setExpiration(new Date(System.currentTimeMillis() + expiration * 1000L))
                    .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                    .compact();
            return token;
        } catch (Exception e) {
            throw new InvalidParamException("Cannot create JWT token, error: " + e.getMessage());
        }
    }

    private Key getSignInKey() {
        byte[] bytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(bytes);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = this.extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public boolean isTokenExpired(String token) {
        Date expirationDate = this.extractClaim(token, Claims::getExpiration);
        return expirationDate.before(new Date());
    }

    public String extractUserName(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        String userName = extractUserName(token);
        return (userName.equals(userDetails.getUsername()) && !isTokenExpired(token)); // Bật lại kiểm tra expiration
    }
}