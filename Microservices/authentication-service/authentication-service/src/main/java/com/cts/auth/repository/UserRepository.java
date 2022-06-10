package com.cts.auth.repository;




import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.auth.entity.User;

@Repository
public interface UserRepository  extends JpaRepository<User, Long>{
	public Optional<User> findByUsername(String username);
}
