package com.muayadsalah.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by Muayad on 3/16/2018.
 */
public class HotelUrls extends ModelBase {

    @JsonProperty(required = true)
    private String hotelInfositeUrl;

    @JsonProperty(required = true)
    private String hotelSearchResultUrl;

    public HotelUrls() {
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
