package fr.simplon.repository;

import org.springframework.data.repository.CrudRepository;

import fr.simplon.model.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

}
