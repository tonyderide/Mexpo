package fr.simplon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.simplon.model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByMail(String mail);
    Optional<User> findByMdp(String mdp);

}
