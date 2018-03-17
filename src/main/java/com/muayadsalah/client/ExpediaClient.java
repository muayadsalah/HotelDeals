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
    @GetMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    String getOffers(@RequestParam(name = "minTripStartDate", required = false) String destinationName,
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
                     @RequestParam(name = "minTripStartDate", required = false) Double maxGuestRating);
}