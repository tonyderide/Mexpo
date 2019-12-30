#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Localisation
#------------------------------------------------------------

CREATE TABLE Localisation(
        code_commune     Int NOT NULL ,
        code_postal      Int NOT NULL ,
        ville            Varchar (50) NOT NULL ,
        pays             Varchar (50) NOT NULL ,
        geolocalistation Varchar (50) NOT NULL
	,CONSTRAINT Localisation_PK PRIMARY KEY (code_commune)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: MUSEEXPO
#------------------------------------------------------------

CREATE TABLE MUSEEXPO(
        ville           Varchar (50) NOT NULL ,
        nom             Varchar (50) NOT NULL ,
        adresse         Varchar (50) NOT NULL ,
        geolocalisation Varchar (50) NOT NULL ,
        telephone       Varchar (50) NOT NULL ,
        www             Varchar (50) NOT NULL ,
        description     Varchar (50) NOT NULL ,
        id              Int NOT NULL ,
        code_commune    Int NOT NULL
	,CONSTRAINT MUSEEXPO_Idx INDEX (id)
	,CONSTRAINT MUSEEXPO_PK PRIMARY KEY (ville)

	,CONSTRAINT MUSEEXPO_Localisation_FK FOREIGN KEY (code_commune) REFERENCES Localisation(code_commune)
	,CONSTRAINT MUSEEXPO_Localisation_AK UNIQUE (code_commune)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: THEME
#------------------------------------------------------------

CREATE TABLE THEME(
        ID   Int NOT NULL ,
        TYPE Varchar (50) NOT NULL
	,CONSTRAINT THEME_PK PRIMARY KEY (ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: OEUVRE
#------------------------------------------------------------

CREATE TABLE OEUVRE(
        N_INVENTAIRE  Int NOT NULL ,
        NOM           Varchar (50) NOT NULL ,
        DATE_CREATION Date NOT NULL ,
        TYPE          Varchar (50) NOT NULL ,
        LIEUX_EXPO    Varchar (50) NOT NULL ,
        ville         Varchar (50) NOT NULL ,
        ID            Int NOT NULL
	,CONSTRAINT OEUVRE_AK UNIQUE (LIEUX_EXPO)
	,CONSTRAINT OEUVRE_PK PRIMARY KEY (N_INVENTAIRE)

	,CONSTRAINT OEUVRE_MUSEEXPO_FK FOREIGN KEY (ville) REFERENCES MUSEEXPO(ville)
	,CONSTRAINT OEUVRE_THEME0_FK FOREIGN KEY (ID) REFERENCES THEME(ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: ARTISTE
#------------------------------------------------------------

CREATE TABLE ARTISTE(
        ID             Int NOT NULL ,
        NOM            Varchar (50) NOT NULL ,
        DATE_NAISSANCE Int NOT NULL ,
        DECES          Varchar (50) NOT NULL ,
        code_commune   Int NOT NULL ,
        N_INVENTAIRE   Int NOT NULL
	,CONSTRAINT ARTISTE_PK PRIMARY KEY (ID)

	,CONSTRAINT ARTISTE_Localisation_FK FOREIGN KEY (code_commune) REFERENCES Localisation(code_commune)
	,CONSTRAINT ARTISTE_OEUVRE0_FK FOREIGN KEY (N_INVENTAIRE) REFERENCES OEUVRE(N_INVENTAIRE)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: utilisateur
#------------------------------------------------------------

CREATE TABLE utilisateur(
        id          Int NOT NULL ,
        nom         Varchar (50) NOT NULL ,
        prenom      Varchar (50) NOT NULL ,
        email       Varchar (50) NOT NULL ,
        telephone   Int NOT NULL ,
        adresse     Varchar (50) NOT NULL ,
        code_postal Int NOT NULL ,
        ville       Varchar (50) NOT NULL
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Concerner
#------------------------------------------------------------

CREATE TABLE Concerner(
        ville Varchar (50) NOT NULL ,
        ID    Int NOT NULL
	,CONSTRAINT Concerner_PK PRIMARY KEY (ville,ID)

	,CONSTRAINT Concerner_MUSEEXPO_FK FOREIGN KEY (ville) REFERENCES MUSEEXPO(ville)
	,CONSTRAINT Concerner_THEME0_FK FOREIGN KEY (ID) REFERENCES THEME(ID)
)ENGINE=InnoDB;

