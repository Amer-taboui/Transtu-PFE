package com.javainuse.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Ligne")
public class Ligne {

	private long id;
    private String numero;
	private String origin;
	private String destination;
	private String reseau;
    private String regimH;
    private String etat;
    private String depot;
    private String type;

	public Ligne() {

	}

	public Ligne(String numero , String origin, String destination , String reseau, String  regimH, String  etat, String depot, String type) {
        this.numero = numero;
	    this.origin = origin;
		this.destination = destination;
		this.reseau = reseau ;
        this.regimH = regimH;
        this.etat = etat;
        this.depot = depot;
        this.type= type;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	@Column(name = "numero", nullable = false)
	public String getNumero() {
		return numero;
	}
	public void setNumero(String Numero) {
		this.numero = Numero;
	}

	@Column(name = "origin", nullable = false)
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String Origin) {
		this.origin = Origin;
	}

	@Column(name = "type", nullable = false)
	public String getType() { return type; }
	public void setType(String type) { this.type = type; }

	@Column(name = "destination", nullable = false)
	public String getDestination() { return destination; }
	public void setDestination(String Destination) {this.destination = Destination; }

    @Column(name = "reseau", nullable = false)
    public String getReseau() { return reseau; }
    public void setReseau(String Reseau) {this.reseau = Reseau; }

    @Column(name = "regimH", nullable = false)
    public String getRegimH() { return regimH; }
    public void setRegimH(String RegimH) {this.regimH = RegimH; }

    @Column(name = "etat", nullable = false)
    public String getEtat() { return etat; }
    public void setEtat(String Etat) {this.etat = Etat; }

    @Column(name = "depot", nullable = false)
    public String getDepot(){ return depot; }
    public void setDepot(String depot) { this.depot = depot; }

	@Override
	public String toString() {
		return "Employee [id=" + id + ", Numero=" + numero + ", Origin=" + origin + ", Destination=" + destination +", Reseau=" + reseau + ",   RegimH=" + regimH + ",  Etat=" + etat
				+ ", type= " + type + "]";
	}


}
