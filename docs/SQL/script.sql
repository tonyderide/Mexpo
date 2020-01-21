#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: musee
#------------------------------------------------------------

CREATE TABLE musee(
        id_musee         Int  Auto_increment  NOT NULL ,
        nom              Varchar (50) NOT NULL ,
        adresse          Varchar (50) NOT NULL ,
        ville            Varchar (50) NOT NULL ,
        code_postal      Int NOT NULL ,
        geolocalisation  Varchar (50) NOT NULL ,
        telephone        Varchar (50) NOT NULL ,
        mail             Varchar (100) NOT NULL ,
        description      Varchar (500) NOT NULL ,
        adresse_internet Varchar (50) NOT NULL
	,CONSTRAINT musee_PK PRIMARY KEY (id_musee)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: THEME
#------------------------------------------------------------

CREATE TABLE THEME(
        id_theme Int  Auto_increment  NOT NULL ,
        type     Varchar (50) NOT NULL
	,CONSTRAINT THEME_PK PRIMARY KEY (id_theme)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: OEUVRE
#------------------------------------------------------------

CREATE TABLE OEUVRE(
        n_inventaire  Varchar (50) NOT NULL ,
        nom           Varchar (50) NOT NULL ,
        date_creation Date NOT NULL ,
        lieux_expo    Varchar (50) NOT NULL ,
        id_musee      Int
	,CONSTRAINT OEUVRE_PK PRIMARY KEY (n_inventaire)

	,CONSTRAINT OEUVRE_musee_FK FOREIGN KEY (id_musee) REFERENCES musee(id_musee)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: ARTISTE
#------------------------------------------------------------

CREATE TABLE ARTISTE(
        id_artiste Int  Auto_increment  NOT NULL ,
        nom        Varchar (50) NOT NULL ,
        prenom     Varchar (50) NOT NULL ,
        naissance  Date NOT NULL ,
        deces      Date NOT NULL
	,CONSTRAINT ARTISTE_PK PRIMARY KEY (id_artiste)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: user
#------------------------------------------------------------

CREATE TABLE user(
        id             Int  Auto_increment  NOT NULL ,
        nom            Varchar (50) NOT NULL ,
        prenom         Varchar (50) NOT NULL ,
        mail           Varchar (100) NOT NULL ,
        adresse        Varchar (200) NOT NULL ,
        ville          Varchar (50) NOT NULL ,
        code_postal    Varchar (50) NOT NULL ,
        mdp            Varchar (50) NOT NULL ,
        administrateur Bool NOT NULL
	,CONSTRAINT user_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Appartenir
#------------------------------------------------------------

CREATE TABLE Appartenir(
        n_inventaire Varchar (50) NOT NULL ,
        id_artiste   Int NOT NULL
	,CONSTRAINT Appartenir_PK PRIMARY KEY (n_inventaire,id_artiste)

	,CONSTRAINT Appartenir_OEUVRE_FK FOREIGN KEY (n_inventaire) REFERENCES OEUVRE(n_inventaire)
	,CONSTRAINT Appartenir_ARTISTE0_FK FOREIGN KEY (id_artiste) REFERENCES ARTISTE(id_artiste)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Composer
#------------------------------------------------------------

CREATE TABLE Composer(
        id_theme     Int NOT NULL ,
        n_inventaire Varchar (50) NOT NULL
	,CONSTRAINT Composer_PK PRIMARY KEY (id_theme,n_inventaire)

	,CONSTRAINT Composer_THEME_FK FOREIGN KEY (id_theme) REFERENCES THEME(id_theme)
	,CONSTRAINT Composer_OEUVRE0_FK FOREIGN KEY (n_inventaire) REFERENCES OEUVRE(n_inventaire)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Avoir
#------------------------------------------------------------

CREATE TABLE Avoir(
        id       Int NOT NULL ,
        id_musee Int NOT NULL
	,CONSTRAINT Avoir_PK PRIMARY KEY (id,id_musee)

	,CONSTRAINT Avoir_user_FK FOREIGN KEY (id) REFERENCES user(id)
	,CONSTRAINT Avoir_musee0_FK FOREIGN KEY (id_musee) REFERENCES musee(id_musee)
)ENGINE=InnoDB;
