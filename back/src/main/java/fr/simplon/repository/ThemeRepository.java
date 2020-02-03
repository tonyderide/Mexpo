package fr.simplon.repository;

import org.springframework.data.repository.CrudRepository;

import fr.simplon.model.Theme;

public interface ThemeRepository extends CrudRepository<Theme , Integer> {}
