package com.muayadsalah.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by Muayad on 3/16/2018.
 */
public class HotelInfo extends ModelBase {

    @JsonProperty(required = true)
    private Integer hotelId;

    @JsonProperty(required = true)
    private String hotelName;

    @JsonProperty(required = true)
    private String localizedHotelName;

    @JsonProperty(required = true)
    private String hotelDestination;

    @JsonProperty(required = true)
    private Integer hotelDestinationRegionID;

    @JsonProperty(required = true)
    private String hotelLongDestination;

    @JsonProperty(required = true)
    private String hotelStreetAddress;

    @JsonProperty(required = true)
    private String hotelCity;

    @JsonProperty(required = true)
    private String hotelProvince;

    @JsonProperty(required = true)
    private String hotelCountryCode;

    @JsonProperty(required = true)
    private Double hotelLatitude;

    @JsonProperty(required = true)
    private Double hotelLongitude;

    @JsonProperty(required = true)
    private Float hotelStarRating;

    @JsonProperty(required = true)
    private Float hotelGuestReviewRating;

    @JsonProperty(required = true)
    private Integer hotelReviewTotal;

    @JsonProperty(required = true)
    private String hotelImageUrl;

    @JsonProperty(required = true)
    private Boolean vipAccess;

    @JsonProperty(required = true, value = "isOfficialRating")
    private Boolean isOfficialRating;

    public HotelInfo() {
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotelId(Integer hotelId) {
        this.hotelId = hotelId;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getLocalizedHotelName() {
        return localizedHotelName;
    }

    public void setLocalizedHotelName(String localizedHotelName) {
        this.localizedHotelName = localizedHotelName;
    }

    public String getHotelDestination() {
        return hotelDestination;
    }

    public void setHotelDestination(String hotelDestination) {
        this.hotelDestination = hotelDestination;
    }

    public Integer getHotelDestinationRegionID() {
        return hotelDestinationRegionID;
    }

    public void setHotelDestinationRegionID(Integer hotelDestinationRegionID) {
        this.hotelDestinationRegionID = hotelDestinationRegionID;
    }

    public String getHotelLongDestination() {
        return hotelLongDestination;
    }

    public void setHotelLongDestination(String hotelLongDestination) {
        this.hotelLongDestination = hotelLongDestination;
    }

    public String getHotelStreetAddress() {
        return hotelStreetAddress;
    }

    public void setHotelStreetAddress(String hotelStreetAddress) {
        this.hotelStreetAddress = hotelStreetAddress;
    }

    public String getHotelCity() {
        return hotelCity;
    }

    public void setHotelCity(String hotelCity) {
        this.hotelCity = hotelCity;
    }

    public String getHotelProvince() {
        return hotelProvince;
    }

    public void setHotelProvince(String hotelProvince) {
        this.hotelProvince = hotelProvince;
    }

    public String getHotelCountryCode() {
        return hotelCountryCode;
    }

    public void setHotelCountryCode(String hotelCountryCode) {
        this.hotelCountryCode = hotelCountryCode;
    }

    public Double getHotelLatitude() {
        return hotelLatitude;
    }

    public void setHotelLatitude(Double hotelLatitude) {
        this.hotelLatitude = hotelLatitude;
    }

    public Double getHotelLongitude() {
        return hotelLongitude;
    }

    public void setHotelLongitude(Double hotelLongitude) {
        this.hotelLongitude = hotelLongitude;
    }

    public Float getHotelStarRating() {
        return hotelStarRating;
    }

    public void setHotelStarRating(Float hotelStarRating) {
        this.hotelStarRating = hotelStarRating;
    }

    public Float getHotelGuestReviewRating() {
        return hotelGuestReviewRating;
    }

    public void setHotelGuestReviewRating(Float hotelGuestReviewRating) {
        this.hotelGuestReviewRating = hotelGuestReviewRating;
    }

    public Integer getHotelReviewTotal() {
        return hotelReviewTotal;
    }

    public void setHotelReviewTotal(Integer hotelReviewTotal) {
        this.hotelReviewTotal = hotelReviewTotal;
    }

    public String getHotelImageUrl() {
        return hotelImageUrl;
    }

    public void setHotelImageUrl(String hotelImageUrl) {
        this.hotelImageUrl = hotelImageUrl;
    }

    public Boolean getVipAccess() {
        return vipAccess;
    }

    public void setVipAccess(Boolean vipAccess) {
        this.vipAccess = vipAccess;
    }

    public Boolean getOfficialRating() {
        return isOfficialRating;
    }

    public void setOfficialRating(Boolean officialRating) {
        isOfficialRating = officialRating;
    }
}
