package com.cts.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.model.RoleModel;
import com.cts.repo.RoleRepository;

@Service
public class RoleService {
	@Autowired
	private RoleRepository roleRepository;

	public RoleModel getRole(String roleName) {
		// TODO Auto-generated method stub
		return roleRepository.findByRoleName(roleName);
	}

	@Transactional
	public RoleModel addRole(RoleModel rolemodel) {
		return roleRepository.save(rolemodel);
	}
}
