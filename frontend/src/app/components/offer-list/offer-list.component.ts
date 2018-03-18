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
  offers$: Observable<Offer[]>;
  offers: Array<Offer> = [];

  constructor(private offerService: OfferService) {
  }

  ngOnInit() {
    // this.offers$ = this.offerService.offers$;
    this.offerService.offers$.subscribe(offers => this.offers = offers);
  }
}
