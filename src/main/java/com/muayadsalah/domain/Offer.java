package com.muayadsalah.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;

/**
 * Data model to be returned to the client
 * Created by Muayad on 3/16/2018.
 */
public class Offer extends ModelBase {

    @JsonProperty(required = true)
    private String destinationShortName;

    @JsonProperty(required = true)
    private String destinationCountry;

    @JsonProperty(required = true)
    private String destinationCity;

    @JsonProperty(required = true)
    private String destinationProvince;


    private String hotelName;
    @JsonProperty(required = true)

    private String hotelAddress;
    @JsonProperty(required = true)

    private Double hotelStarRating;
    @JsonProperty(required = true)
    private Double hotelGuestReviewRating;

    @JsonProperty(required = true)
    private Long hotelReviewTotal;

    @JsonProperty(required = true)
    private Double averagePriceValue;

    @JsonProperty(required = true)
    private Double totalPriceValue;

    @JsonProperty(required = true)
    private Double crossOutPriceValue;

    @JsonProperty(required = true)
    private Double originalPricePerNight;

    @JsonProperty(required = true)
    private Double percentSavings;

    @JsonProperty(required = true)
    private String priceCurrency;

    @JsonProperty(required = true)
    private LocalDate travelStartDate;

    @JsonProperty(required = true)
    private LocalDate travelEndDate;

    @JsonProperty(required = true)
    private Integer lengthOfStay;

    @JsonProperty(required = true)
    private String hotelImageUrl;

    @JsonProperty(required = true)
    private String hotelInfositeUrl;

    @JsonProperty(required = true)
    private String hotelSearchResultUrl;

    public Offer() {
    }

    public Offer(String destinationShortName,
                 String destinationCountry,
                 String destinationCity,
                 String destinationProvince,
                 String hotelName,
                 String hotelAddress,
                 Double hotelStarRating,
                 Double hotelGuestReviewRating,
                 Long hotelReviewTotal,
                 Double averagePriceValue,
                 Double totalPriceValue,
                 Double crossOutPriceValue,
                 Double originalPricePerNight,
                 Double percentSavings,
                 String priceCurrency,
                 LocalDate travelStartDate,
                 LocalDate travelEndDate,
                 Integer lengthOfStay,
                 String hotelImageUrl,
                 String hotelInfositeUrl,
                 String hotelSearchResultUrl) {
        this.destinationShortName = destinationShortName;
        this.destinationCountry = destinationCountry;
        this.destinationCity = destinationCity;
        this.destinationProvince = destinationProvince;
        this.hotelName = hotelName;
        this.hotelAddress = hotelAddress;
        this.hotelStarRating = hotelStarRating;
        this.hotelGuestReviewRating = hotelGuestReviewRating;
        this.hotelReviewTotal = hotelReviewTotal;
        this.averagePriceValue = averagePriceValue;
        this.totalPriceValue = totalPriceValue;
        this.crossOutPriceValue = crossOutPriceValue;
        this.originalPricePerNight = originalPricePerNight;
        this.percentSavings = percentSavings;
        this.priceCurrency = priceCurrency;
        this.travelStartDate = travelStartDate;
        this.travelEndDate = travelEndDate;
        this.lengthOfStay = lengthOfStay;
        this.hotelImageUrl = hotelImageUrl;
        this.hotelInfositeUrl = hotelInfositeUrl;
        this.hotelSearchResultUrl = hotelSearchResultUrl;
    }

    public String getDestinationShortName() {
        return destinationShortName;
    }

    public void setDestinationShortName(String destinationShortName) {
        this.destinationShortName = destinationShortName;
    }

    public String getDestinationCountry() {
        return destinationCountry;
    }

    public void setDestinationCountry(String destinationCountry) {
        this.destinationCountry = destinationCountry;
    }

    public String getDestinationCity() {
        return destinationCity;
    }

    public void setDestinationCity(String destinationCity) {
        this.destinationCity = destinationCity;
    }

    public String getDestinationProvince() {
        return destinationProvince;
    }

    public void setDestinationProvince(String destinationProvince) {
        this.destinationProvince = destinationProvince;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getHotelAddress() {
        return hotelAddress;
    }

    public void setHotelAddress(String hotelAddress) {
        this.hotelAddress = hotelAddress;
    }

    public Double getHotelStarRating() {
        return hotelStarRating;
    }

    public void setHotelStarRating(Double hotelStarRating) {
        this.hotelStarRating = hotelStarRating;
    }

    public Double getHotelGuestReviewRating() {
        return hotelGuestReviewRating;
    }

    public void setHotelGuestReviewRating(Double hotelGuestReviewRating) {
        this.hotelGuestReviewRating = hotelGuestReviewRating;
    }

    public Long getHotelReviewTotal() {
        return hotelReviewTotal;
    }

    public void setHotelReviewTotal(Long hotelReviewTotal) {
        this.hotelReviewTotal = hotelReviewTotal;
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

    public Double getPercentSavings() {
        return percentSavings;
    }

    public void setPercentSavings(Double percentSavings) {
        this.percentSavings = percentSavings;
    }

    public String getPriceCurrency() {
        return priceCurrency;
    }

    public void setPriceCurrency(String priceCurrency) {
        this.priceCurrency = priceCurrency;
    }

    public LocalDate getTravelStartDate() {
        return travelStartDate;
    }

    public void setTravelStartDate(LocalDate travelStartDate) {
        this.travelStartDate = travelStartDate;
    }

    public LocalDate getTravelEndDate() {
        return travelEndDate;
    }

    public void setTravelEndDate(LocalDate travelEndDate) {
        this.travelEndDate = travelEndDate;
    }

    public Integer getLengthOfStay() {
        return lengthOfStay;
    }

    public void setLengthOfStay(Integer lengthOfStay) {
        this.lengthOfStay = lengthOfStay;
    }

    public String getHotelImageUrl() {
        return hotelImageUrl;
    }

    public void setHotelImageUrl(String hotelImageUrl) {
        this.hotelImageUrl = hotelImageUrl;
    }

    public String getHotelInfositeUrl() {
        return hotelInfositeUrl;
    }

    public void setHotelInfositeUrl(String hotelInfositeUrl) {
        this.hotelInfositeUrl = hotelInfositeUrl;
    }

    public String getHotelSearchResultUrl() {
        return hotelSearchResultUrl;
    }

    public void setHotelSearchResultUrl(String hotelSearchResultUrl) {
        this.hotelSearchResultUrl = hotelSearchResultUrl;
    }
}