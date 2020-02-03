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
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@EqualsAndHashCode
//@ToString
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

	@ManyToMany
	@JoinTable(name="Avoir")
	private Collection<Musee> musee;


	public User() {

	}

	public User(String nom, String prenom, String mail, String voie, String codePostal, String ville, String mdp, boolean admin, Collection<Musee> musee) {
		this.nom = nom;
		this.prenom = prenom;
		this.mail = mail;
		this.voie = voie;
		this.codePostal = codePostal;
		this.ville = ville;
		this.mdp = mdp;
		this.admin = admin;
		this.musee = musee;
	}
	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getVoie() {
		return voie;
	}

	public void setVoie(String voie) {
		this.voie = voie;
	}

	public String getCodePostal() {
		return codePostal;
	}

	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}

	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	public Collection<Musee> getMusee() {
		return musee;
	}

	public void setMusee(Collection<Musee> musee) {
		this.musee = musee;
	}



	@Override
	public String toString() {
		return "User{" +
				"idUser=" + idUser +
				", nom='" + nom + '\'' +
				", prenom='" + prenom + '\'' +
				", mail='" + mail + '\'' +
				", voie='" + voie + '\'' +
				", codePostal='" + codePostal + '\'' +
				", ville='" + ville + '\'' +
				", mdp='" + mdp + '\'' +
				", admin=" + admin +
				", musee=" + musee +
				'}';


	}


}
