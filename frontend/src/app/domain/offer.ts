export class Offer {
  constructor(public destinationShortName: string,
              public destinationCountry: string,
              public destinationCity: string,
              public destinationProvince: string,
              public hotelName: string,
              public hotelAddress: string,
              public hotelStarRating: number,
              public hotelGuestReviewRating: number,
              public hotelReviewTotal: number,
              public averagePriceValue: number,
              public totalPriceValue: number,
              public crossOutPriceValue: number,
              public originalPricePerNight: number,
              public percentSavings: number,
              public priceCurrency: string,
              public travelStartDate: string,
              public travelEndDate: string,
              public lengthOfStay: number,
              public hotelImageUrl: string,
              public hotelInfositeUrl: string,
              public hotelSearchResultUrl: string,) {
  }
}
