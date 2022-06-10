package com.cts.auth.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;


public class JwtAuthFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
			
		String tokenString = request.getHeader("Authorization");
		
		if(tokenString != null){
			if(tokenString.startsWith("Bearer ")){
				String jwtToken = tokenString.substring(7);
					
				try{
					Claims claims = Jwts.parserBuilder()
							.setSigningKey(Keys.hmacShaKeyFor("Lkjk12673784gfjgafjgdfjafjfjdsjfjhfieufioewrifewiofiejfiewifjejfkjskfjdslfk".getBytes()))
							.build()
							.parseClaimsJws(jwtToken)
							.getBody(); 
					
					String username = (String) claims.get("username");
					List<SimpleGrantedAuthority> authorities =  new ArrayList<>();
					authorities.add(new SimpleGrantedAuthority(claims.get("role").toString()));
					SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(username,null,authorities));
					
				
				}catch(Exception e){
					System.out.println("Invalid token login failed");
				}
			}
		}
		
		
		filterChain.doFilter(request, response);
	}

}
