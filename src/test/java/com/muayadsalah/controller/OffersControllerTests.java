package com.muayadsalah.controller;

import com.muayadsalah.base.OffersBaseTests;
import com.muayadsalah.service.OfferService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Created by Muayad on 3/20/2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(OffersController.class)
public class OffersControllerTests extends OffersBaseTests {
    @Autowired
    private MockMvc mvc;

    @MockBean
    private OfferService offerService;

    @Test
    public void responseReturnTypeShouldBeJsonUtf8() throws Exception {
        given(offerService.getOffers(null, null, null, null, null, null, null, null, null, null, null, null))
                .willReturn(getStubOffers());

        mvc.perform(get("/api/offers"))
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());
    }

    @Test
    public void getOffersWithNoQueryParamsShouldReturnFiveOffers() throws Exception {
        given(offerService.getOffers(null, null, null, null, null, null, null, null, null, null, null, null))
                .willReturn(getStubOffers());

        mvc.perform(get("/api/offers"))
                .andExpect(jsonPath("$", hasSize(5)))
                .andExpect(status().isOk());
    }

    @Test
    public void getOffersWithHotelStarRatingEqualsFourShouldReturnThreeOffers() throws Exception {
        given(offerService.getOffers(null, null, null, null, null, null, 4.0, null, null, null, null, null))
                .willReturn(getStubOffers_hotelStarRatingMoreThanOrEqualsToThree());

        mvc.perform(get("/api/offers?minStarRating=4"))
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(status().isOk());
    }
}
