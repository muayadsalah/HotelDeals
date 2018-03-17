package com.muayadsalah.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.muayadsalah.client.ExpediaClient;
import com.muayadsalah.domain.Offers;
import com.muayadsalah.exception.OffersException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

/**
 * Created by Muayad on 3/16/2018.
 */

@Service
public class OffersServiceImpl implements OffersService {
    private final ExpediaClient expediaClient;
    private final ObjectMapper objectMapper;

    @Autowired
    public OffersServiceImpl(ExpediaClient expediaClient,
                             ObjectMapper objectMapper) {
        this.expediaClient = expediaClient;
        this.objectMapper = objectMapper;
    }

    @Override
    public Offers getOffers(String destinationName,
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
                            Double maxGuestRating) {
        String offers = expediaClient.getOffers(destinationName,
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
        Offers offers2 = null;
        try {
            JsonNode offers1 = objectMapper.readTree(offers).get("offers");
            offers2 = objectMapper.readerFor(Offers.class).readValue(offers1);
        } catch (IOException e) {
                throw new OffersException(e);
        }
        return offers2;
    }
}
