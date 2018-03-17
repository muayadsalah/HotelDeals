package com.muayadsalah.domain;

import javax.validation.Valid;

/**
 * Created by Muayad on 3/16/2018.
 */
public class Hotel extends ModelBase {

    @Valid
    private OfferDateRange offerDateRange;

    @Valid
    private Destination destination;

    @Valid
    private HotelInfo hotelInfo;

    @Valid
    private HotelPricingInfo hotelPricingInfo;

    @Valid
    private HotelUrls hotelUrls;

    public Hotel() {
    }

    public OfferDateRange getOfferDateRange() {
        return offerDateRange;
    }

    public void setOfferDateRange(OfferDateRange offerDateRange) {
        this.offerDateRange = offerDateRange;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }

    public HotelInfo getHotelInfo() {
        return hotelInfo;
    }

    public void setHotelInfo(HotelInfo hotelInfo) {
        this.hotelInfo = hotelInfo;
    }

    public HotelPricingInfo getHotelPricingInfo() {
        return hotelPricingInfo;
    }

    public void setHotelPricingInfo(HotelPricingInfo hotelPricingInfo) {
        this.hotelPricingInfo = hotelPricingInfo;
    }

    public HotelUrls getHotelUrls() {
        return hotelUrls;
    }

    public void setHotelUrls(HotelUrls hotelUrls) {
        this.hotelUrls = hotelUrls;
    }
}
