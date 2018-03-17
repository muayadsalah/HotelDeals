package com.muayadsalah.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Muayad on 3/16/2018.
 */
public class Offers extends ModelBase{
    @Valid
    private List<Hotel> hotels = new ArrayList<Hotel>();

    public Offers() {
    }

    @JsonProperty(value = "hotels")
    public List<Hotel> getHotels() {
        return hotels;
    }

    @JsonProperty(value = "Hotel")
    public void setHotels(List<Hotel> hotels) {
        this.hotels = hotels;
    }
}
