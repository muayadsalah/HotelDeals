package com.muayadsalah.service;

import com.muayadsalah.domain.Hotel;
import com.muayadsalah.domain.Offers;

import java.util.List;

/**
 * Created by Muayad on 3/16/2018.
 */
public interface OffersService {
    Offers getOffers(String destinationName,
                     String  destinationCity,
                     String destinationCountry,
                     int[] regionIds,
                     Integer lengthOfStay,
                     String minTripStartDate,
                     String maxTripStartDate,
                     Double minStarRating,
                     Double maxStarRating,
                     Integer minTotalRate,
                     Integer maxTotalRate,
                     Double minGuestRating,
                     Double maxGuestRating);
}
