import {Component, OnInit} from "@angular/core";
import {OfferService} from "../../services/offer.service";
import {Offer} from "../../domain/offer";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  private static RETRIEVING_OFFERS: string = "Retrieving offers,,,";
  private static NO_OFFERS: string = "No offers found!";

  offers: Array<Offer> = [];
  noOffersMessage: string = OfferListComponent.RETRIEVING_OFFERS;

  constructor(private offerService: OfferService) {
  }

  ngOnInit() {
    this.offerService.offers$.subscribe(offers => {
      this.offers = offers
      this.noOffersMessage = this.offers.length? OfferListComponent.RETRIEVING_OFFERS : OfferListComponent.NO_OFFERS;
    });

    this.offerService.queryParams$.subscribe(params => {
      this.offers = [];
      this.noOffersMessage = OfferListComponent.RETRIEVING_OFFERS;
    });
  }
}
