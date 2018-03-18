import {Component, Input, OnInit} from "@angular/core";
import {Offer} from "../../../domain/offer";

@Component({
  selector: 'offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {
  @Input() offer: Offer;

  constructor() {
  }

  ngOnInit() {
  }

}
