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
    private Long expiration ;
    @Value("${jwt.secretky}")
    private String secretky;
    public String generateToken(com.project.booktour.models.User user) throws InvalidParamException {
        Map<String, Object> claim = new HashMap<>();
        claim.put("phonenumber" , user.getPhoneNumber());
        try{
            String token = Jwts.builder()
                    .setClaims(claim)
                    .setSubject(user.getPhoneNumber())
                    .setExpiration(new Date(System.currentTimeMillis() +  expiration * 1000L))
                    .signWith(getSignInKey() , SignatureAlgorithm.HS256).compact();
            return token;
        }catch (Exception e){
            throw new InvalidParamException("Cannot crate jwt token , error " + e.getMessage());
        }
    }
    private Key getSignInKey(){
        byte[] bytes = Decoders.BASE64.decode(secretky);
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
    public String extractPhoneNumber(String token){
        return extractClaim(token , Claims :: getSubject);
    }
    public boolean validateToken(String token, UserDetails userDetails) {
        String phoneNumber = extractPhoneNumber(token);
        return (phoneNumber.equals(userDetails.getUsername()));
        // && !isTokenExpired(token);
    }

}
