package com.cts.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long>{
	public Optional<UserModel> findByUsername(String username);
}
