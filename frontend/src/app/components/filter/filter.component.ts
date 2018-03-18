import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {OfferService} from "../../services/offer.service";
import {FilterOptions} from "../../domain/filter-options";
import {countryNames} from "./country.names";


@Component({
  selector: 'offer-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filters: FilterOptions;
  countryNamesOptions: string[] = countryNames;

  constructor(private router: Router,
              private offerService: OfferService) {
    this.filters = this.offerService.filters;
  }

  ngOnInit() {
  }

  filterOffers() {
    this.updateQueryParams();
  }

  updateQueryParams() {
    for (let key in this.filters)
      if (this.filters[key] !== null && this.filters[key].length == 0)
        this.filters[key] = null;

    this.router.navigate(['.'], {queryParams: this.filters});
  }
}
