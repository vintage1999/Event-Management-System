package com.cts.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.auth.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	public Role findByRoleName(String role);
}
