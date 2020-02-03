INSERT INTO mexpo.artiste (id, deces, naissance, nom, prenom) VALUES (1, 'pablo', 'picasso', '1950-01-01', '1989-01-01');
INSERT INTO mexpo.artiste (id, deces, naissance, nom, prenom) VALUES (2, 'vincent', 'van gogh', '1899-01-01', '1970-01-01');
INSERT INTO mexpo.artiste (id, deces, naissance, nom, prenom) VALUES (3, 'andy', 'warhol', '1950-01-04', '1979-02-01');
INSERT INTO mexpo.artiste (id, deces, naissance, nom, prenom) VALUES (4, 'leonard', 'de vinci', '1650-01-05', '1730-01-05');
INSERT INTO mexpo.artiste (id, deces, naissance, nom, prenom) VALUES (5, 'claude', 'monet', '1930-01-01', '1970-01-07');
INSERT INTO mexpo.oeuvre (numero_inventaire, date_creation, lieux_expo, nom) VALUES ('G7545', 'autoportrait', '1800-04-07', 'musée d''orsay');
INSERT INTO mexpo.oeuvre (numero_inventaire, date_creation, lieux_expo, nom) VALUES ('G7546', 'radeau de la meduse', '1900-01-03', 'louvre');
INSERT INTO mexpo.oeuvre (numero_inventaire, date_creation, lieux_expo, nom) VALUES ('G7547', 'coquelicot', '1900-01-03', 'musée des arts et métiers');
INSERT INTO mexpo.oeuvre (numero_inventaire, date_creation, lieux_expo, nom) VALUES ('G7548', 'grue de chantier', '1900-01-03', 'musée d''art moderne');
INSERT INTO mexpo.oeuvre (numero_inventaire, date_creation, lieux_expo, nom) VALUES ('G7549', 'poupé de cire', '1900-01-03', 'musée grévin');
INSERT INTO mexpo.theme (id_theme, type) VALUES (1, 'peinture');
INSERT INTO mexpo.theme (id_theme, type) VALUES (2, 'sculpture');
INSERT INTO mexpo.theme (id_theme, type) VALUES (3, 'photographie');
INSERT INTO mexpo.theme (id_theme, type) VALUES (4, 'egypte');
INSERT INTO mexpo.theme (id_theme, type) VALUES (5, 'moyen age');

INSERT INTO mexpo.composer (oeuvre_numero_inventaire, themes_id_theme) VALUES ('G7545', 1);
INSERT INTO mexpo.composer (oeuvre_numero_inventaire, themes_id_theme) VALUES ('G7546', 2);
INSERT INTO mexpo.composer (oeuvre_numero_inventaire, themes_id_theme) VALUES ('G7548', 3);
INSERT INTO mexpo.composer (oeuvre_numero_inventaire, themes_id_theme) VALUES ('G7548', 4);
INSERT INTO mexpo.composer (oeuvre_numero_inventaire, themes_id_theme) VALUES ('G7549', 5);
INSERT INTO mexpo.appartenir (artiste_id, oeuvres_numero_inventaire) VALUES (1, 'G7545');
INSERT INTO mexpo.appartenir (artiste_id, oeuvres_numero_inventaire) VALUES (2, 'G7546');
INSERT INTO mexpo.appartenir (artiste_id, oeuvres_numero_inventaire) VALUES (3, 'G7547');
INSERT INTO mexpo.appartenir (artiste_id, oeuvres_numero_inventaire) VALUES (4, 'G7548');
INSERT INTO mexpo.appartenir (artiste_id, oeuvres_numero_inventaire) VALUES (5, 'G7549');