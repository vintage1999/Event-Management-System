package com.cts.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.model.RoleModel;



@Repository
public interface RoleRepository extends JpaRepository<RoleModel, Long> {
	public RoleModel findByRoleName(String roleName);
}

