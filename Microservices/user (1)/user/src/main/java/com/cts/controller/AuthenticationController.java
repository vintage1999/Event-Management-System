package com.cts.controller;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cts.model.RoleModel;
import com.cts.model.UserModel;
import com.cts.security.JwtRequest;
import com.cts.service.AuthenticationService;
import com.cts.service.RoleService;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class AuthenticationController {
	@Autowired
	private AuthenticationService authenticationService;

	@Autowired
	private RoleService roleService;

	@PostMapping("/register/{roleName}")
	public ResponseEntity<UserModel> registerUser(@RequestBody UserModel newUser, @PathVariable String roleName) {
		newUser.setRole("ROLE_" + roleName);
		UserModel savedUser = this.authenticationService.addUser(newUser);
		return new ResponseEntity<>(savedUser, HttpStatus.OK);
	}

	@PostMapping("/role")
	public ResponseEntity<RoleModel> logIn(@RequestBody RoleModel r) {
		RoleModel role = this.roleService.addRole(r);
		return new ResponseEntity<>(role, HttpStatus.OK);
	}

	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> logIn(@RequestBody JwtRequest credentials) {
		Map<String, Object> response = new HashMap<>();
		String jwt = this.authenticationService.generateToken(credentials);
		response.put("token", jwt);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/validate")
	public ResponseEntity<UserModel> validate() {

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		UserModel UserModel = new UserModel();
		UserModel.setUsername(auth.getName());
		Iterator authorities = auth.getAuthorities().iterator();
		String role = "";

		while (authorities.hasNext()) {
			role = authorities.next().toString();
		}
		UserModel.setRole(role);
		return new ResponseEntity<>(UserModel, HttpStatus.OK);

	}

}
