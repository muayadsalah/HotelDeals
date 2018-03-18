import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {map, switchMap} from "rxjs/operators";

import {Offer} from "../domain/offer";
import {FilterOptions} from "../domain/filter-options";

@Injectable()
export class OfferService {
  filters: FilterOptions = new FilterOptions();

  queryParams$: Observable<ParamMap>;

  offers$: Observable<Array<Offer>>;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
    this.queryParams$ = this.route.queryParamMap.pipe(map(params => params));
    this.queryParams$.subscribe((queryParams) => {
      this.filters.destinationCity = queryParams.get("destinationCity");
      this.filters.destinationCountry = queryParams.get("destinationCountry");
      this.filters.lengthOfStay = queryParams.get("lengthOfStay");
      this.filters.minTripStartDate = queryParams.get("minTripStartDate");
      this.filters.maxTripStartDate = queryParams.get("maxTripStartDate");
      this.filters.minStarRating = queryParams.get("minStarRating");
      this.filters.maxStarRating = queryParams.get("maxStarRating");
      this.filters.minTotalRate = queryParams.get("minTotalRate");
      this.filters.maxTotalRate = queryParams.get("maxTotalRate");
      this.filters.minGuestRating = queryParams.get("minGuestRating");
      this.filters.maxGuestRating = queryParams.get("maxGuestRating");

      if (queryParams.get("regionIds"))
        this.filters.regionIds = queryParams.get("regionIds").split(",");
      else
        this.filters.regionIds = null;
    });

    this.offers$ = this.queryParams$.pipe(switchMap((queryParams) => {
      const params = new HttpParams();
      for (let key in this.filters)
        params.append(key, this.filters[key])
      return this.http.get<Array<Offer>>('/api/offers?' + this.calculateQueryParamsString());
    }));
  }

  calculateQueryParamsString(): string {
    let query: string = ''
    for (let key in this.filters)
      if (this.filters[key])
        query += key + "=" + this.filters[key] + "&";
    return query.length > 0 ? query.substr(0, query.length - 1) : query;
  }
}
