#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: VILLE
#------------------------------------------------------------

CREATE TABLE VILLE(
        ID      Int NOT NULL ,
        ADRESSE Varchar (50) NOT NULL ,
        VILLE   Varchar (50) NOT NULL
	,CONSTRAINT VILLE_AK UNIQUE (VILLE)
	,CONSTRAINT VILLE_PK PRIMARY KEY (ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: MUSEE
#------------------------------------------------------------

CREATE TABLE MUSEE(
        ID           Int NOT NULL ,
        NOM          Varchar (50) NOT NULL ,
        LOCALISATION Int NOT NULL ,
        VILLE        Varchar (50) NOT NULL ,
        ID_VILLE     Int NOT NULL
	,CONSTRAINT MUSEE_AK UNIQUE (VILLE)
	,CONSTRAINT MUSEE_PK PRIMARY KEY (ID)

	,CONSTRAINT MUSEE_VILLE_FK FOREIGN KEY (ID_VILLE) REFERENCES VILLE(ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: THEME
#------------------------------------------------------------

CREATE TABLE THEME(
        ID    Int NOT NULL ,
        FORME Varchar (50) NOT NULL
	,CONSTRAINT THEME_PK PRIMARY KEY (ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: OEUVRE
#------------------------------------------------------------

CREATE TABLE OEUVRE(
        N_INVENTAIRE    Int NOT NULL ,
        NOM             Varchar (50) NOT NULL ,
        DATE_CREATION   Date NOT NULL ,
        TYPE            Varchar (50) NOT NULL ,
        LIEUX_EXPO      Varchar (50) NOT NULL ,
        NOM__DE_LARTIST Varchar (50) NOT NULL ,
        ID              Int NOT NULL
	,CONSTRAINT OEUVRE_AK UNIQUE (NOM__DE_LARTIST)
	,CONSTRAINT OEUVRE_PK PRIMARY KEY (N_INVENTAIRE)

	,CONSTRAINT OEUVRE_MUSEE_FK FOREIGN KEY (ID) REFERENCES MUSEE(ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: ARTISTE
#------------------------------------------------------------

CREATE TABLE ARTISTE(
        ID             Int NOT NULL ,
        NOM            Varchar (50) NOT NULL ,
        DATE_NAISSANCE Int NOT NULL ,
        DECES          Varchar (50) NOT NULL ,
        ID_VILLE       Int NOT NULL
	,CONSTRAINT ARTISTE_PK PRIMARY KEY (ID)

	,CONSTRAINT ARTISTE_VILLE_FK FOREIGN KEY (ID_VILLE) REFERENCES VILLE(ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Appartenir1
#------------------------------------------------------------

CREATE TABLE Appartenir1(
        N_INVENTAIRE Int NOT NULL ,
        ID           Int NOT NULL
	,CONSTRAINT Appartenir1_PK PRIMARY KEY (N_INVENTAIRE,ID)

	,CONSTRAINT Appartenir1_OEUVRE_FK FOREIGN KEY (N_INVENTAIRE) REFERENCES OEUVRE(N_INVENTAIRE)
	,CONSTRAINT Appartenir1_ARTISTE0_FK FOREIGN KEY (ID) REFERENCES ARTISTE(ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Appartenir3
#------------------------------------------------------------

CREATE TABLE Appartenir3(
        ID           Int NOT NULL ,
        N_INVENTAIRE Int NOT NULL
	,CONSTRAINT Appartenir3_PK PRIMARY KEY (ID,N_INVENTAIRE)

	,CONSTRAINT Appartenir3_THEME_FK FOREIGN KEY (ID) REFERENCES THEME(ID)
	,CONSTRAINT Appartenir3_OEUVRE0_FK FOREIGN KEY (N_INVENTAIRE) REFERENCES OEUVRE(N_INVENTAIRE)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Appartenir
#------------------------------------------------------------

CREATE TABLE Appartenir(
        ID       Int NOT NULL ,
        ID_MUSEE Int NOT NULL
	,CONSTRAINT Appartenir_PK PRIMARY KEY (ID,ID_MUSEE)

	,CONSTRAINT Appartenir_THEME_FK FOREIGN KEY (ID) REFERENCES THEME(ID)
	,CONSTRAINT Appartenir_MUSEE0_FK FOREIGN KEY (ID_MUSEE) REFERENCES MUSEE(ID)
)ENGINE=InnoDB;

