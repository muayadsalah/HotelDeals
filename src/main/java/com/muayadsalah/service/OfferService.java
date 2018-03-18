package com.muayadsalah.service;

import com.muayadsalah.domain.Offer;

import java.util.List;

/**
 * Created by Muayad on 3/16/2018.
 */
public interface OfferService {
    List<Offer> getOffers(
            String destinationCity,
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
            Double maxGuestRating
    );
}
