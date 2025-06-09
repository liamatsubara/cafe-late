package com.fatec.cafe_late.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "perfilSensorial")
public class PerfilSensorial {

    private int id;
    private String variedade;
    private String processo;
    private String altitude;
    private String torra;
    private String corpo;
    private String acidez;
    private String docura;
    private String idealPara;

    public PerfilSensorial(int id, String variedade, String processo, String altitude, String torra, String corpo, String acidez, String docura, String idealPara) {
        this.id = id;
        this.variedade = variedade;
        this.processo = processo;
        this.altitude = altitude;
        this.torra = torra;
        this.corpo = corpo;
        this.acidez = acidez;
        this.docura = docura;
        this.idealPara = idealPara;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVariedade() {
        return variedade;
    }

    public void setVariedade(String variedade) {
        this.variedade = variedade;
    }

    public String getProcesso() {
        return processo;
    }

    public void setProcesso(String processo) {
        this.processo = processo;
    }

    public String getAltitude() {
        return altitude;
    }

    public void setAltitude(String altitude) {
        this.altitude = altitude;
    }

    public String getTorra() {
        return torra;
    }

    public void setTorra(String torra) {
        this.torra = torra;
    }

    public String getCorpo() {
        return corpo;
    }

    public void setCorpo(String corpo) {
        this.corpo = corpo;
    }

    public String getAcidez() {
        return acidez;
    }

    public void setAcidez(String acidez) {
        this.acidez = acidez;
    }

    public String getDocura() {
        return docura;
    }

    public void setDocura(String docura) {
        this.docura = docura;
    }

    public String getIdealPara() {
        return idealPara;
    }

    public void setIdealPara(String idealPara) {
        this.idealPara = idealPara;
    }
}
