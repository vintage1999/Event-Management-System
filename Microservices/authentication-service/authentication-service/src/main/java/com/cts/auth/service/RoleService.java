package com.cts.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.auth.entity.Role;
import com.cts.auth.repository.RoleRepository;

@Service
public class RoleService {
	@Autowired
	private RoleRepository roleRepository;
	public Role getRole(String role) {
		// TODO Auto-generated method stub
		return roleRepository.findByRoleName(role);
	}
	
	public Role addRole(Role role){
		return roleRepository.save(role);
	}
}
