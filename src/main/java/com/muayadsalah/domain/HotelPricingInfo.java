package com.muayadsalah.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by Muayad on 3/16/2018.
 */
public class HotelPricingInfo extends ModelBase {

    @JsonProperty(required = true)
    private Double averagePriceValue;

    @JsonProperty(required = true)
    private Double totalPriceValue;

    @JsonProperty(required = true)
    private Double crossOutPriceValue;

    @JsonProperty(required = true)
    private Double originalPricePerNight;

    @JsonProperty(required = true)
    private String currency;

    @JsonProperty(required = true)
    private Double percentSavings;

    @JsonProperty(required = true)
    private Boolean drr;

    public HotelPricingInfo() {
    }

    public Double getAveragePriceValue() {
        return averagePriceValue;
    }

    public void setAveragePriceValue(Double averagePriceValue) {
        this.averagePriceValue = averagePriceValue;
    }

    public Double getTotalPriceValue() {
        return totalPriceValue;
    }

    public void setTotalPriceValue(Double totalPriceValue) {
        this.totalPriceValue = totalPriceValue;
    }

    public Double getCrossOutPriceValue() {
        return crossOutPriceValue;
    }

    public void setCrossOutPriceValue(Double crossOutPriceValue) {
        this.crossOutPriceValue = crossOutPriceValue;
    }

    public Double getOriginalPricePerNight() {
        return originalPricePerNight;
    }

    public void setOriginalPricePerNight(Double originalPricePerNight) {
        this.originalPricePerNight = originalPricePerNight;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Double getPercentSavings() {
        return percentSavings;
    }

    public void setPercentSavings(Double percentSavings) {
        this.percentSavings = percentSavings;
    }

    public Boolean getDrr() {
        return drr;
    }

    public void setDrr(Boolean drr) {
        this.drr = drr;
    }
}
