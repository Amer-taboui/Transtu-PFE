package com.javainuse.pojo;

public class LineFilter {
    String numero;
    String type;
    String reseau;
    String depot;
   // long max;




    public LineFilter(String numero, String type, String reseau, String depot) {
        this.numero = numero;
        this.type = type;
        this.reseau = reseau;
        this.depot = depot;
    }

    public LineFilter() {
    }

    public String getDepot() {
        return depot;
    }

    public String getReseau() {
        return reseau;
    }

    public String getNumero() {
        return numero;
    }

    public String getType() {
        return type;
    }
}
