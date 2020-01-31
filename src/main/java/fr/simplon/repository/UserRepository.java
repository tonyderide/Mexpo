package fr.simplon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.simplon.model.User;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {


}
