package fr.simplon.model;

import javax.persistence.*;

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
public class Musee {

    @Id
    private String idMusee;

    private String nom;
    private String adresse;
    private String ville;
    private String codePostal;
    private String geolocalisation;
    private String telephone;
    private String mail;
    @Column(length = 5000)
    private String description;
    private String siteWeb;


}
