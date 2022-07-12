package io.github.barbosavinicius.morpheusUsers.model.repository;

import io.github.barbosavinicius.morpheusUsers.model.entity.MUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MUserRepository extends JpaRepository<MUser, Integer> {
}
