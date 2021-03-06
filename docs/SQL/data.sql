INSERT INTO mexpo.musee (id_musee, nom, adresse, ville, code_postal, geolocalisation, telephone, mail, description, adresse_internet) VALUES (1, 'musée du louvre', 'rue du louvre', 'paris', 75001, '11,22,33.11,22,33', '0141112233', 'louvre@gmail.fr', 'lorem', 'wwww.louvre.fr');
INSERT INTO mexpo.musee (id_musee, nom, adresse, ville, code_postal, geolocalisation, telephone, mail, description, adresse_internet) VALUES (2, 'musée dorsay', 'rue de la petite orsay', 'paris', 75004, '11,22,33.11,22,33', '0237546543', 'orssay@gmail.fr', 'lorem', 'wwww.orsay.fr');
INSERT INTO mexpo.musee (id_musee, nom, adresse, ville, code_postal, geolocalisation, telephone, mail, description, adresse_internet) VALUES (3, 'musée des arts et métier', 'rue du metier', 'nantes', 44000, '11,22,33.11,22,33', '0643464221', 'metier@gmail.fr', 'lorem', 'wwww.boulot.fr');
INSERT INTO mexpo.musee (id_musee, nom, adresse, ville, code_postal, geolocalisation, telephone, mail, description, adresse_internet) VALUES (4, 'musée grévin', 'rue de la grève', 'angers', 49000, '11,22,33.11,22,33', '0532456790', 'cirage@gmail.fr', 'lorem', 'wwww.grève.fr');
INSERT INTO mexpo.musee (id_musee, nom, adresse, ville, code_postal, geolocalisation, telephone, mail, description, adresse_internet) VALUES (5, 'musée art moderne', 'rue perdu', 'strasbourg', 67000, '11,22,33.11,22,33', '1234456778', 'moderne@gmail.fr', 'lorem', 'wwww.caché.fr');

INSERT INTO mexpo.user (id, nom, prenom, mail, adresse, ville, code_postal, mdp, administrateur) VALUES (1, 'tony', 'deride', 'tony.deride.lp4@gmail.com', 'rue du boulet', 'paris', '75002', '123', 1);
INSERT INTO mexpo.user (id, nom, prenom, mail, adresse, ville, code_postal, mdp, administrateur) VALUES (2, 'vader', 'darth', 'darth.vader@gmail.com', 'rue du jedi', 'nantes', '44000', 'luke', 0);
INSERT INTO mexpo.user (id, nom, prenom, mail, adresse, ville, code_postal, mdp, administrateur) VALUES (3, 'tobelem', 'josselin', 'josselin.tobelem@gmail.com', 'rue du formateur', 'marseille', '03000', '105531Ln', 1);
INSERT INTO mexpo.user (id, nom, prenom, mail, adresse, ville, code_postal, mdp, administrateur) VALUES (4, 'bros', 'mario', 'mario.bros@gmail.com', 'rue peach', 'angers', '49000', 'luigi', 0);
INSERT INTO mexpo.user (id, nom, prenom, mail, adresse, ville, code_postal, mdp, administrateur) VALUES (5, 'casse', 'couille', 'couille.casse@gmail.com', 'rue boule', 'lyon', '69000', 'porn', 0);

INSERT INTO mexpo.OEUVRE (n_inventaire, nom, date_creation, lieux_expo, id_musee) VALUES ('G7545', 'autoportrait', '1800-04-07', 'musée d''orsay', null);
INSERT INTO mexpo.OEUVRE (n_inventaire, nom, date_creation, lieux_expo, id_musee) VALUES ('G7546', 'radeau de la meduse', '1900-01-03', 'louvre', null);
INSERT INTO mexpo.OEUVRE (n_inventaire, nom, date_creation, lieux_expo, id_musee) VALUES ('G7547', 'coquelicot', '1900-01-03', 'musée des arts et métiers', null);
INSERT INTO mexpo.OEUVRE (n_inventaire, nom, date_creation, lieux_expo, id_musee) VALUES ('G7548', 'grue de chantier', '1900-01-03', 'musée d''art moderne', null);
INSERT INTO mexpo.OEUVRE (n_inventaire, nom, date_creation, lieux_expo, id_musee) VALUES ('G7549', 'poupé de cire', '1900-01-03', 'musée grévin', null);

INSERT INTO mexpo.THEME (id_theme, type) VALUES (1, 'peinture');
INSERT INTO mexpo.THEME (id_theme, type) VALUES (2, 'sculpture');
INSERT INTO mexpo.THEME (id_theme, type) VALUES (3, 'photographie');
INSERT INTO mexpo.THEME (id_theme, type) VALUES (4, 'egypte');
INSERT INTO mexpo.THEME (id_theme, type) VALUES (5, 'moyen age');

INSERT INTO mexpo.ARTISTE (id_artiste, nom, prenom, naissance, deces) VALUES (1, 'pablo', 'picasso', '1950-01-01', '1989-01-01');
INSERT INTO mexpo.ARTISTE (id_artiste, nom, prenom, naissance, deces) VALUES (2, 'vincent', 'van gogh', '1899-01-01', '1970-01-01');
INSERT INTO mexpo.ARTISTE (id_artiste, nom, prenom, naissance, deces) VALUES (3, 'andy', 'warhol', '1950-01-04', '1979-02-01');
INSERT INTO mexpo.ARTISTE (id_artiste, nom, prenom, naissance, deces) VALUES (4, 'leonard', 'de vinci', '1650-01-05', '1730-01-05');
INSERT INTO mexpo.ARTISTE (id_artiste, nom, prenom, naissance, deces) VALUES (5, 'claude', 'monet', '1930-01-01', '1970-01-07');

INSERT INTO mexpo.Composer (id_theme, n_inventaire) VALUES (4, 'G7545');
INSERT INTO mexpo.Composer (id_theme, n_inventaire) VALUES (1, 'G7546');
INSERT INTO mexpo.Composer (id_theme, n_inventaire) VALUES (1, 'G7548');
INSERT INTO mexpo.Composer (id_theme, n_inventaire) VALUES (3, 'G7548');
INSERT INTO mexpo.Composer (id_theme, n_inventaire) VALUES (5, 'G7549');

INSERT INTO mexpo.Avoir (id, id_musee) VALUES (1, 2);
INSERT INTO mexpo.Avoir (id, id_musee) VALUES (2, 2);
INSERT INTO mexpo.Avoir (id, id_musee) VALUES (4, 4);
INSERT INTO mexpo.Avoir (id, id_musee) VALUES (3, 5);
INSERT INTO mexpo.Avoir (id, id_musee) VALUES (5, 5);


INSERT INTO mexpo.Appartenir (n_inventaire, id_artiste) VALUES ('G7545', 1);
INSERT INTO mexpo.Appartenir (n_inventaire, id_artiste) VALUES ('G7546', 2);
INSERT INTO mexpo.Appartenir (n_inventaire, id_artiste) VALUES ('G7547', 3);
INSERT INTO mexpo.Appartenir (n_inventaire, id_artiste) VALUES ('G7548', 4);
INSERT INTO mexpo.Appartenir (n_inventaire, id_artiste) VALUES ('G7549', 5);

