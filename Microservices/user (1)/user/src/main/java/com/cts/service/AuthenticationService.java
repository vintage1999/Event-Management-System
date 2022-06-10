package com.cts.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import com.cts.model.UserModel;
import com.cts.repo.UserRepository;
import com.cts.security.JwtRequest;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class AuthenticationService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Transactional
	public UserModel addUser(UserModel UserModel) {
		return userRepository.save(UserModel);
	}

	public UserModel getUser(String username) {
		Optional<UserModel> u = userRepository.findByUsername(username);

		return u.get();
	}

	public String generateToken(JwtRequest credentials) {

		Authentication auth = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(credentials.getUsername(), credentials.getPassword()));

		String jwt = Jwts.builder().setIssuer("Event Manager").claim("username", auth.getName())
				.claim("role", auth.getAuthorities().toArray()[0].toString()).setIssuedAt(new Date())
				.setExpiration(new Date(new Date().getTime() + 600000))
				.signWith(Keys.hmacShaKeyFor(
						"Lkjk12673784gfjgafjgdfjafjfjdsjfjhfieufioewrifewiofiejfiewifjejfkjskfjdslfk".getBytes()))
				.compact();
		return jwt;

	}

}
