import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

import {AppComponent} from "./app.component";
import {OfferListComponent} from "./components/offer-list/offer-list.component";
import {FooterComponent} from "./components/footer/footer.component";
import {OfferItemComponent} from "./components/offer-list/offer-item/offer-item.component";
import {OfferDetailsComponent} from "./components/offer-list/offer-item/offer-details/offer-details.component";
import {FilterComponent} from "./components/filter/filter.component";
import {OfferService} from "./services/offer.service";

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent,
    FooterComponent,
    OfferItemComponent,
    OfferDetailsComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  providers: [
    OfferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
