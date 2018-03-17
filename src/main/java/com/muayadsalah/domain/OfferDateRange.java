package com.muayadsalah.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.util.StdConverter;

import java.time.LocalDate;
import java.util.ArrayList;

/**
 * Created by Muayad on 3/16/2018.
 */
public class OfferDateRange extends ModelBase {

    @JsonProperty(required = true)
    private LocalDate travelStartDate;

    @JsonProperty(required = true)
    private LocalDate travelEndDate;

    @JsonProperty(required = true)
    private Integer lengthOfStay;

    public OfferDateRange() {
    }

    public LocalDate getTravelStartDate() {
        return travelStartDate;
    }

    @JsonDeserialize(converter = ArrayToDateConverter.class)
    public void setTravelStartDate(LocalDate travelStartDate) {
        this.travelStartDate = travelStartDate;
    }

    public LocalDate getTravelEndDate() {
        return travelEndDate;
    }

    @JsonDeserialize(converter = ArrayToDateConverter.class)
    public void setTravelEndDate(LocalDate travelEndDate) {
        this.travelEndDate = travelEndDate;
    }

    public Integer getLengthOfStay() {
        return lengthOfStay;
    }

    public void setLengthOfStay(Integer lengthOfStay) {
        this.lengthOfStay = lengthOfStay;
    }


    public static class ArrayToDateConverter extends StdConverter<ArrayList<Integer>, LocalDate> {
        public LocalDate convert(ArrayList<Integer> value) {
            if(value == null) return null;
            return LocalDate.of(value.get(0), value.get(1), value.get(2));
        }
    }
}
