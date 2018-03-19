package com.muayadsalah.base;

import com.muayadsalah.domain.Offer;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Muayad on 3/20/2018.
 */
public class OffersBaseTests {

    protected List<Offer> getStubOffers() {
        List<Offer> offers = new ArrayList<Offer>();

        offers.add(new Offer("Miami", "United States of America", "Miami", "Florida", "Miami Beach Luxury Yacht Charters", "300 Alton Rd", 4.5, 0.0, 0L, 2162.0, 6486.0, 9062.0, 9062.0, 76.14, "USD", LocalDate.parse("2018-05-18"), LocalDate.parse("2018-05-11"), 3, "https://images.trvl-media.com/hotels/17000000/16160000/16157600/16157511/a03e0897_y.jpg", "https://www.expedia.com/go/hotel/info/16157511/2018-05-18/2018-05-21", "https://www.expedia.com/go/hotel/search/Destination/2018-05-18/2018-05-21?SearchType=Destination&CityName=Miami Beach&RegionId=178286&Selected=16157511"));
        offers.add(new Offer("Miamo", "Germany", "Miame", "Floridawa", "Grand Washinton Hotel", "300 Alton Rd", 3.0, 0.0, 0L, 2162.0, 6486.0, 9062.0, 9062.0, 76.14, "USD", LocalDate.parse("2018-05-18"), LocalDate.parse("2018-06-21"), 6, "https://images.trvl-media.com/hotels/17000000/16160000/16157600/16157511/a03e0897_y.jpg", "https://www.expedia.com/go/hotel/info/16157511/2018-05-18/2018-05-21", "https://www.expedia.com/go/hotel/search/Destination/2018-05-18/2018-05-21?SearchType=Destination&CityName=Miami Beach&RegionId=178286&Selected=16157511"));
        offers.add(new Offer("Miame", "Albania", "Miamie", "Florida", "Hotel name 3", "300 Alton Rsdd", 4.0, 0.0, 0L, 2162.0, 6486.0, 9062.0, 9062.0, 76.14, "USD", LocalDate.parse("2018-05-18"), LocalDate.parse("2018-07-21"), 1, "https://images.trvl-media.com/hotels/17000000/16160000/16157600/16157511/a03e0897_y.jpg", "https://www.expedia.com/go/hotel/info/16157511/2018-05-18/2018-05-21", "https://www.expedia.com/go/hotel/search/Destination/2018-05-18/2018-05-21?SearchType=Destination&CityName=Miami Beach&RegionId=178286&Selected=16157511"));
        offers.add(new Offer("Miamw", "Turkry", "Miamia", "Florida", "Hotel name 4", "300 Alton Rfdfd", 3.5, 0.0, 0L, 2162.0, 6486.0, 9062.0, 9062.0, 76.14, "USD", LocalDate.parse("2018-05-18"), LocalDate.parse("2018-08-21"), 8, "https://images.trvl-media.com/hotels/17000000/16160000/16157600/16157511/a03e0897_y.jpg", "https://www.expedia.com/go/hotel/info/16157511/2018-05-18/2018-05-21", "https://www.expedia.com/go/hotel/search/Destination/2018-05-18/2018-05-21?SearchType=Destination&CityName=Miami Beach&RegionId=178286&Selected=16157511"));
        offers.add(new Offer("Miama", "United States of America", "Miamki", "Florida", "Yet another hotel", "300 Altodfn Rd", 4.0, 0.0, 0L, 2162.0, 6486.0, 9062.0, 9062.0, 76.14, "USD", LocalDate.parse("2018-09-18"), LocalDate.parse("2018-10-21"), 3, "https://images.trvl-media.com/hotels/17000000/16160000/16157600/16157511/a03e0897_y.jpg", "https://www.expedia.com/go/hotel/info/16157511/2018-05-18/2018-05-21", "https://www.expedia.com/go/hotel/search/Destination/2018-05-18/2018-05-21?SearchType=Destination&CityName=Miami Beach&RegionId=178286&Selected=16157511"));
        return offers;
    }

    protected List<Offer> getStubOffers_hotelStarRatingMoreThanOrEqualsToThree() {
        return getStubOffers().stream().filter(offer -> offer.getHotelStarRating() >= 4.0)
                .collect(Collectors.toList());
    }
}
