package fr.simplon.model;



import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Collection;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class User {

	@Id @GeneratedValue (strategy = GenerationType.IDENTITY)
	private int idUser;

	private String nom;
	private String prenom;
	private String mail;
	private String voie;
	private String codePostal;
	private String ville;
	private String mdp;
	private boolean admin;

	@OneToMany(cascade = CascadeType.REMOVE , fetch = FetchType.LAZY)
	private Collection<Musee> musee;
	
}
