package com.muayadsalah.controller;

import com.muayadsalah.domain.Offer;
import com.muayadsalah.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Muayad on 3/16/2018.
 */

@RestController
public class OffersController {

    private final OfferService offerService;

    @Autowired
    public OffersController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping("/api/deals")
    List<Offer> getAllOffers(@RequestParam(name = "minTripStartDate", required = false) String destinationName,
                             @RequestParam(name = "minTripStartDate", required = false) String destinationCity,
                             @RequestParam(name = "destinationCountry", required = false) String destinationCountry,
                             @RequestParam(name = "regionIds", required = false) int[] regionIds,
                             @RequestParam(name = "minTripStartDate", required = false) Integer lengthOfStay,
                             @RequestParam(name = "minTripStartDate", required = false) String minTripStartDate,
                             @RequestParam(name = "minTripStartDate", required = false) String maxTripStartDate,
                             @RequestParam(name = "minTripStartDate", required = false) Double minStarRating,
                             @RequestParam(name = "minTripStartDate", required = false) Double maxStarRating,
                             @RequestParam(name = "minTripStartDate", required = false) Integer minTotalRate,
                             @RequestParam(name = "minTripStartDate", required = false) Integer maxTotalRate,
                             @RequestParam(name = "minTripStartDate", required = false) Double minGuestRating,
                             @RequestParam(name = "minTripStartDate", required = false) Double maxGuestRating) {
        return offerService.getOffers(destinationName,
                destinationCity,
                destinationCountry,
                regionIds,
                lengthOfStay,
                minTripStartDate,
                maxTripStartDate,
                minStarRating,
                maxStarRating,
                minTotalRate,
                maxTotalRate,
                minGuestRating,
                maxGuestRating);
    }
}
