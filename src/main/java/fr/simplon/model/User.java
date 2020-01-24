package fr.simplon.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class User {


	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String nom;
	private String prenom;
	private String mail;
	private String voie;
	private String ville;
	private String codePostal;
	private String mdp;
	private boolean administrateur;

	
}
