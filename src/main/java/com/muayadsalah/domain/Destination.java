package com.muayadsalah.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by Muayad on 3/16/2018.
 */
public class Destination extends ModelBase {

    @JsonProperty(required = true)
    private Integer regionID;

    @JsonProperty(required = true)
    private Integer associatedMultiCityRegionId;

    @JsonProperty(required = true)
    private String longName;

    @JsonProperty(required = true)
    private String shortName;

    @JsonProperty(required = true)
    private String country;

    @JsonProperty(required = true)
    private String province;

    @JsonProperty(required = true)
    private String city;

    @JsonProperty(required = true)
    private String tla;

    @JsonProperty(required = true)
    private String nonLocalizedCity;

    public Destination() {
    }

    public Integer getRegionID() {
        return regionID;
    }

    public void setRegionID(Integer regionID) {
        this.regionID = regionID;
    }

    public Integer getAssociatedMultiCityRegionId() {
        return associatedMultiCityRegionId;
    }

    public void setAssociatedMultiCityRegionId(Integer associatedMultiCityRegionId) {
        this.associatedMultiCityRegionId = associatedMultiCityRegionId;
    }

    public String getLongName() {
        return longName;
    }

    public void setLongName(String longName) {
        this.longName = longName;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getTla() {
        return tla;
    }

    public void setTla(String tla) {
        this.tla = tla;
    }

    public String getNonLocalizedCity() {
        return nonLocalizedCity;
    }

    public void setNonLocalizedCity(String nonLocalizedCity) {
        this.nonLocalizedCity = nonLocalizedCity;
    }
}
