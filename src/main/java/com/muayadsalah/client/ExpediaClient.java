package com.muayadsalah.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by Muayad on 3/16/2018.
 */

@FeignClient(name = "https://expedia", url = "${expedia.url}", configuration = ExpediaClientConfig.class)
public interface ExpediaClient {

    @GetMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    String getOffers(
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
    );
}