package fr.simplon.repository;

import fr.simplon.model.Musee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface MuseeRepository extends CrudRepository <Musee, Integer>{

}
