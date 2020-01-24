package fr.simplon.repository;

import org.springframework.data.repository.CrudRepository;

import fr.simplon.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
