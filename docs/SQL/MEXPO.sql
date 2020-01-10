#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: musee
#------------------------------------------------------------

CREATE TABLE musee(
        id              Int  Auto_increment  NOT NULL ,
        nom             Varchar (50) NOT NULL ,
        adresse         Varchar (50) NOT NULL ,
        ville           Varchar (50) NOT NULL ,
        code_postal     Int NOT NULL ,
        geolocalisation Varchar (50) NOT NULL ,
        telephone       Varchar (50) NOT NULL ,
        mail            Varchar (100) NOT NULL ,
        description     Varchar (500) NOT NULL
	,CONSTRAINT musee_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: THEME
#------------------------------------------------------------

CREATE TABLE THEME(
        id   Int  Auto_increment  NOT NULL ,
        type Varchar (50) NOT NULL
	,CONSTRAINT THEME_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: OEUVRE
#------------------------------------------------------------

CREATE TABLE OEUVRE(
        n_inventaire  Int NOT NULL ,
        nom           Varchar (50) NOT NULL ,
        date_creation Date NOT NULL ,
        type          Varchar (50) NOT NULL ,
        lieux_expo    Varchar (50) NOT NULL ,
        auteur        Varchar (50) NOT NULL ,
        id            Int NOT NULL
	,CONSTRAINT OEUVRE_PK PRIMARY KEY (n_inventaire)

	,CONSTRAINT OEUVRE_musee_FK FOREIGN KEY (id) REFERENCES musee(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: ARTISTE
#------------------------------------------------------------

CREATE TABLE ARTISTE(
        id           Int  Auto_increment  NOT NULL ,
        nom          Varchar (50) NOT NULL ,
        prenom       Varchar (50) NOT NULL ,
        naissance    Date NOT NULL ,
        deces        Date NOT NULL ,
        n_inventaire Int NOT NULL
	,CONSTRAINT ARTISTE_PK PRIMARY KEY (id)

	,CONSTRAINT ARTISTE_OEUVRE_FK FOREIGN KEY (n_inventaire) REFERENCES OEUVRE(n_inventaire)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: user
#------------------------------------------------------------

CREATE TABLE user(
        mail           Varchar (100) NOT NULL ,
        nom            Varchar (50) NOT NULL ,
        prenom         Varchar (50) NOT NULL ,
        adresse        Varchar (200) NOT NULL ,
        ville          Varchar (50) NOT NULL ,
        code_postal    Varchar (50) NOT NULL ,
        mdp            Varchar (50) NOT NULL ,
        administrateur Bool NOT NULL
	,CONSTRAINT user_PK PRIMARY KEY (mail)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Composer
#------------------------------------------------------------

CREATE TABLE Composer(
        id           Int NOT NULL ,
        n_inventaire Int NOT NULL
	,CONSTRAINT Composer_PK PRIMARY KEY (id,n_inventaire)

	,CONSTRAINT Composer_THEME_FK FOREIGN KEY (id) REFERENCES THEME(id)
	,CONSTRAINT Composer_OEUVRE0_FK FOREIGN KEY (n_inventaire) REFERENCES OEUVRE(n_inventaire)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Avoir
#------------------------------------------------------------

CREATE TABLE Avoir(
        mail Varchar (100) NOT NULL ,
        id   Int NOT NULL
	,CONSTRAINT Avoir_PK PRIMARY KEY (mail,id)

	,CONSTRAINT Avoir_user_FK FOREIGN KEY (mail) REFERENCES user(mail)
	,CONSTRAINT Avoir_musee0_FK FOREIGN KEY (id) REFERENCES musee(id)
)ENGINE=InnoDB;

