package fr.simplon.repository;

import org.springframework.data.repository.CrudRepository;

import fr.simplon.model.Artiste;

public interface ArtisteRepository extends CrudRepository<Artiste, Integer> {}
