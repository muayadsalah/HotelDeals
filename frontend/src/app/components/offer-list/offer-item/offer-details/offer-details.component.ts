import {Component, Input, OnInit} from "@angular/core";
import {Offer} from "../../../../domain/offer";
@Component({
  selector: 'offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  @Input() offer: Offer;

  constructor() {
  }

  ngOnInit() {
  }

}
