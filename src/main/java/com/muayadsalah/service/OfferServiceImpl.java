package com.muayadsalah.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.muayadsalah.client.ExpediaClient;
import com.muayadsalah.domain.Hotel;
import com.muayadsalah.domain.Offer;
import com.muayadsalah.exception.OffersException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Muayad on 3/16/2018.
 */

@Service
public class OfferServiceImpl implements OfferService {
    private final ExpediaClient expediaClient;
    private final ObjectMapper objectMapper;
    @Value("${expedia.response.json.node.offers}")
    private String offersNodeName;
    @Value("${expedia.response.json.node.hotels}")
    private String hotelsNodeName;

    @Autowired
    public OfferServiceImpl(ExpediaClient expediaClient,
                            ObjectMapper objectMapper) {
        this.expediaClient = expediaClient;
        this.objectMapper = objectMapper;
    }

    @Override
    public List<Offer> getOffers(String destinationName,
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
                                 Double maxGuestRating) {
        String expediaResponseString = expediaClient.getOffers(destinationName,
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
        List<Hotel> hotels = null;
        try {
            JsonNode hotelArrayNode = objectMapper.readTree(expediaResponseString)
                    .get(offersNodeName)
                    .get(hotelsNodeName);
            hotels = objectMapper.readerFor(new TypeReference<List<Hotel>>() {
            }).readValue(hotelArrayNode);
        } catch (IOException e) {
            throw new OffersException(e);
        }

        return getOffersFromHotels(hotels);
    }

    private List<Offer> getOffersFromHotels(List<Hotel> hotels) {
        List<Offer> offers = hotels.stream().map(hotel -> {
            return new Offer(hotel.getDestination().getShortName(),
                    hotel.getDestination().getCountry(),
                    hotel.getDestination().getCity(),
                    hotel.getDestination().getProvince(),
                    hotel.getHotelInfo().getHotelName(),
                    hotel.getHotelInfo().getHotelStreetAddress(),
                    hotel.getHotelInfo().getHotelStarRating(),
                    hotel.getHotelInfo().getHotelGuestReviewRating(),
                    hotel.getHotelInfo().getHotelReviewTotal(),
                    hotel.getHotelPricingInfo().getAveragePriceValue(),
                    hotel.getHotelPricingInfo().getTotalPriceValue(),
                    hotel.getHotelPricingInfo().getCrossOutPriceValue(),
                    hotel.getHotelPricingInfo().getOriginalPricePerNight(),
                    hotel.getHotelPricingInfo().getPercentSavings(),
                    hotel.getHotelPricingInfo().getCurrency(),
                    hotel.getOfferDateRange().getTravelStartDate(),
                    hotel.getOfferDateRange().getTravelEndDate(),
                    hotel.getOfferDateRange().getLengthOfStay(),
                    hotel.getHotelInfo().getHotelImageUrl(),
                    hotel.getHotelUrls().getHotelInfositeUrl(),
                    hotel.getHotelUrls().getHotelSearchResultUrl());
        }).collect(Collectors.toList());
        return offers;
    }
}
