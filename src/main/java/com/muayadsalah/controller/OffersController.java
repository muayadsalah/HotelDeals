package com.muayadsalah.controller;

import com.muayadsalah.domain.Offer;
import com.muayadsalah.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Muayad on 3/16/2018.
 */

@RestController
@Validated
@ResponseBody
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class OffersController {

    private final OfferService offerService;

    @Autowired
    public OffersController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping("/api/offers")
    List<Offer> getAllOffers(
            @RequestParam(name = "destinationCity", required = false) String destinationCity,
            @RequestParam(name = "destinationCountry", required = false) String destinationCountry,
            @RequestParam(name = "regionIds", required = false) int[] regionIds,
            @RequestParam(name = "lengthOfStay", required = false) Integer lengthOfStay,
            @RequestParam(name = "minTripStartDate", required = false) String minTripStartDate,
            @RequestParam(name = "maxTripStartDate", required = false) String maxTripStartDate,
            @RequestParam(name = "minStarRating", required = false) Double minStarRating,
            @RequestParam(name = "maxStarRating", required = false) Double maxStarRating,
            @RequestParam(name = "minTotalRate", required = false) Integer minTotalRate,
            @RequestParam(name = "maxTotalRate", required = false) Integer maxTotalRate,
            @RequestParam(name = "minGuestRating", required = false) Double minGuestRating,
            @RequestParam(name = "maxGuestRating", required = false) Double maxGuestRating
    ) {
        return offerService.getOffers(
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
