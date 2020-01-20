INSERT INTO Mexpo.ARTISTE (id_artiste, nom, prenom, naissance, deces, photo_auteur) VALUES (1, 'pablo', 'picasso', '1800-01-02', '1860-01-05', null);
INSERT INTO Mexpo.ARTISTE (id_artiste, nom, prenom, naissance, deces, photo_auteur) VALUES (2, 'vincent', 'van gogh', '1800-01-02', '1860-01-05', null);
INSERT INTO Mexpo.ARTISTE (id_artiste, nom, prenom, naissance, deces, photo_auteur) VALUES (1, 'andy', 'warhol', '1800-01-02', '1860-01-05', null);
INSERT INTO Mexpo.ARTISTE (id_artiste, nom, prenom, naissance, deces, photo_auteur) VALUES (1, 'leonard', 'de vinci', '1800-01-02', '1860-01-05', null);
INSERT INTO Mexpo.ARTISTE (id_artiste, nom, prenom, naissance, deces, photo_auteur) VALUES (1, 'claude', 'monet', '1800-01-02', '1860-01-05', null);

INSERT INTO Mexpo.Appartenir (n_inventaire, id_artiste) VALUES ('G7545', 1);
INSERT INTO Mexpo.Appartenir (n_inventaire, id_artiste) VALUES ('G7545', 1);
INSERT INTO Mexpo.Appartenir (n_inventaire, id_artiste) VALUES ('G7545', 1);
INSERT INTO Mexpo.Appartenir (n_inventaire, id_artiste) VALUES ('G7545', 1);
INSERT INTO Mexpo.Appartenir (n_inventaire, id_artiste) VALUES ('G7545', 1);

INSERT INTO Mexpo.Avoir (mail, id_musee) VALUES ('tony.deride.lp4@gmail.com', 1);
INSERT INTO Mexpo.Avoir (mail, id_musee) VALUES ('tony.deride.lp4@gmail.com', 1);
INSERT INTO Mexpo.Avoir (mail, id_musee) VALUES ('tony.deride.lp4@gmail.com', 1);
INSERT INTO Mexpo.Avoir (mail, id_musee) VALUES ('tony.deride.lp4@gmail.com', 1);
INSERT INTO Mexpo.Avoir (mail, id_musee) VALUES ('tony.deride.lp4@gmail.com', 1);

INSERT INTO Mexpo.Composer (id_theme, n_inventaire) VALUES (1, 'G7545');
INSERT INTO Mexpo.Composer (id_theme, n_inventaire) VALUES (1, 'G7545');
INSERT INTO Mexpo.Composer (id_theme, n_inventaire) VALUES (1, 'G7545');
INSERT INTO Mexpo.Composer (id_theme, n_inventaire) VALUES (1, 'G7545');
INSERT INTO Mexpo.Composer (id_theme, n_inventaire) VALUES (1, 'G7545');

INSERT INTO Mexpo.OEUVRE (n_inventaire, nom, date_creation, type, lieux_expo, auteur, id_musee, photo_oeuvre) VALUES ('G7545', 'Autoportrait', '1800-07-14', 'peinture', 'musée d'orsay', 'vincent van gogh', null, null);
INSERT INTO Mexpo.OEUVRE (n_inventaire, nom, date_creation, type, lieux_expo, auteur, id_musee, photo_oeuvre) VALUES ('G7546', 'radeau de la meduse', '1800-07-14', 'peinture', 'louvre', 'Théodore Géricault ', null, null);
INSERT INTO Mexpo.OEUVRE (n_inventaire, nom, date_creation, type, lieux_expo, auteur, id_musee, photo_oeuvre) VALUES ('G7547', 'radeau de la meduse', '1800-07-14', 'peinture', 'louvre', 'bob lenain', null, null);
INSERT INTO Mexpo.OEUVRE (n_inventaire, nom, date_creation, type, lieux_expo, auteur, id_musee, photo_oeuvre) VALUES ('G7548', 'radeau de la meduse', '1800-07-14', 'peinture', 'louvre', 'bob lenain', null, null);
INSERT INTO Mexpo.OEUVRE (n_inventaire, nom, date_creation, type, lieux_expo, auteur, id_musee, photo_oeuvre) VALUES ('G7549', 'radeau de la meduse', '1800-07-14', 'peinture', 'louvre', 'bob lenain', null, null);

INSERT INTO Mexpo.THEME (id_theme, type) VALUES (1, 'histoire');
INSERT INTO Mexpo.THEME (id_theme, type) VALUES (1, 'histoire');
INSERT INTO Mexpo.THEME (id_theme, type) VALUES (1, 'histoire');
INSERT INTO Mexpo.THEME (id_theme, type) VALUES (1, 'histoire');
INSERT INTO Mexpo.THEME (id_theme, type) VALUES (1, 'histoire');

INSERT INTO Mexpo.musee (id_musee, nom, adresse, ville, code_postal, geolocalisation, telephone, mail, description, adresse_internet, photo_musee) VALUES (1, 'louvre', 'rue du louvre', 'paris', 75002, '11,22,33.11,22,33', '0141112233', 'bob@bob.fr', 'lorem', 'wwww.louvre.fr', null);
INSERT INTO Mexpo.musee (id_musee, nom, adresse, ville, code_postal, geolocalisation, telephone, mail, description, adresse_internet, photo_musee) VALUES (1, 'louvre', 'rue du louvre', 'paris', 75002, '11,22,33.11,22,33', '0141112233', 'bob@bob.fr', 'lorem', 'wwww.louvre.fr', null);
INSERT INTO Mexpo.musee (id_musee, nom, adresse, ville, code_postal, geolocalisation, telephone, mail, description, adresse_internet, photo_musee) VALUES (1, 'louvre', 'rue du louvre', 'paris', 75002, '11,22,33.11,22,33', '0141112233', 'bob@bob.fr', 'lorem', 'wwww.louvre.fr', null);
INSERT INTO Mexpo.musee (id_musee, nom, adresse, ville, code_postal, geolocalisation, telephone, mail, description, adresse_internet, photo_musee) VALUES (1, 'louvre', 'rue du louvre', 'paris', 75002, '11,22,33.11,22,33', '0141112233', 'bob@bob.fr', 'lorem', 'wwww.louvre.fr', null);
INSERT INTO Mexpo.musee (id_musee, nom, adresse, ville, code_postal, geolocalisation, telephone, mail, description, adresse_internet, photo_musee) VALUES (1, 'louvre', 'rue du louvre', 'paris', 75002, '11,22,33.11,22,33', '0141112233', 'bob@bob.fr', 'lorem', 'wwww.louvre.fr', null);

INSERT INTO Mexpo.user (mail, nom, prenom, adresse, ville, code_postal, mdp, administrateur) VALUES ('tony.deride.lp4@gmail.com', 'deride', 'tony', 'tony.lp4@maimail.com', 'boulet', '69696', '123', 1);
INSERT INTO Mexpo.user (mail, nom, prenom, adresse, ville, code_postal, mdp, administrateur) VALUES ('tony.deride.lp4@gmail.com', 'deride', 'tony', 'tony.lp4@maimail.com', 'boulet', '69696', '123', 1);
INSERT INTO Mexpo.user (mail, nom, prenom, adresse, ville, code_postal, mdp, administrateur) VALUES ('tony.deride.lp4@gmail.com', 'deride', 'tony', 'tony.lp4@maimail.com', 'boulet', '69696', '123', 1);
INSERT INTO Mexpo.user (mail, nom, prenom, adresse, ville, code_postal, mdp, administrateur) VALUES ('tony.deride.lp4@gmail.com', 'deride', 'tony', 'tony.lp4@maimail.com', 'boulet', '69696', '123', 1);
INSERT INTO Mexpo.user (mail, nom, prenom, adresse, ville, code_postal, mdp, administrateur) VALUES ('tony.deride.lp4@gmail.com', 'deride', 'tony', 'tony.lp4@maimail.com', 'boulet', '69696', '123', 1);
