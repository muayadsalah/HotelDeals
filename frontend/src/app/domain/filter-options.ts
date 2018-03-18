export class FilterOptions {
  constructor(public destinationCity: string = null,
              public destinationCountry: string = null,
              public regionIds: string[] = null,
              public lengthOfStay: string = null,
              public minTripStartDate: string = null,
              public maxTripStartDate: string = null,
              public minStarRating: string = null,
              public maxStarRating: string = null,
              public minTotalRate: string = null,
              public maxTotalRate: string = null,
              public minGuestRating: string = null,
              public maxGuestRating: string = null) {
  }
}
