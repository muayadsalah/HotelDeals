webpackJsonp(["main"], {

    /***/
    "./src/$$_lazy_route_resource lazy recursive": /***/ (function (module, exports) {

        function webpackEmptyAsyncContext(req) {
            // Here Promise.resolve().then() is used instead of new Promise() to prevent
            // uncatched exception popping up in devtools
            return Promise.resolve().then(function () {
                throw new Error("Cannot find module '" + req + "'.");
            });
        }

        webpackEmptyAsyncContext.keys = function () {
            return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

        /***/
    }),

    /***/
    "./src/app/app.component.css": /***/ (function (module, exports) {

        module.exports = ""

        /***/
    }),

    /***/
    "./src/app/app.component.html": /***/ (function (module, exports) {

        module.exports = "\n\n\n<div class=\"container\">\n  <div class=\"jumbotron small\">\n    <img src=\"../assets/logo.png\" style=\"height: 80pt\">\n    <h2 style=\"display: inline; color: #0086B3; vertical-align: middle;\">{{title}}</h2>\n    <p>Search hotel offers to find the best that suites you well :)</p>\n  </div>\n</div>\n\n<div class=\"content-wraper\">\n  <div class=\"container main-content\">\n    <div class=\"row content-alignment\">\n      <div class=\"col-sm-8 offer-list\">\n        <offer-list></offer-list>\n      </div>\n      <div class=\"col-sm-4 filters-form\">\n        <offer-filter></offer-filter>\n      </div>\n    </div>\n  </div>\n</div>\n<footer></footer>\n"

        /***/
    }),

    /***/
    "./src/app/app.component.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return AppComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

        var AppComponent = /** @class */ (function () {
            function AppComponent() {
                this.title = 'Hotel Offers';
            }

            AppComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
                    selector: 'app-root',
                    template: __webpack_require__("./src/app/app.component.html"),
                    styles: [__webpack_require__("./src/app/app.component.css")]
                })
            ], AppComponent);
            return AppComponent;
        }());


        /***/
    }),

    /***/
    "./src/app/app.module.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return AppModule;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__components_offer_list_offer_list_component__ = __webpack_require__("./src/app/components/offer-list/offer-list.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9__components_offer_list_offer_item_offer_item_component__ = __webpack_require__("./src/app/components/offer-list/offer-item/offer-item.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_10__components_offer_list_offer_item_offer_details_offer_details_component__ = __webpack_require__("./src/app/components/offer-list/offer-item/offer-details/offer-details.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_11__components_filter_filter_component__ = __webpack_require__("./src/app/components/filter/filter.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_12__services_offer_service__ = __webpack_require__("./src/app/services/offer.service.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };


        var appRoutes = [];
        var AppModule = /** @class */ (function () {
            function AppModule() {
            }

            AppModule = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                        __WEBPACK_IMPORTED_MODULE_7__components_offer_list_offer_list_component__["a" /* OfferListComponent */],
                        __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
                        __WEBPACK_IMPORTED_MODULE_9__components_offer_list_offer_item_offer_item_component__["a" /* OfferItemComponent */],
                        __WEBPACK_IMPORTED_MODULE_10__components_offer_list_offer_item_offer_details_offer_details_component__["a" /* OfferDetailsComponent */],
                        __WEBPACK_IMPORTED_MODULE_11__components_filter_filter_component__["a" /* FilterComponent */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                        __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                        __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {enableTracing: false})
                    ],
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_12__services_offer_service__["a" /* OfferService */]
                    ],
                    bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
                })
            ], AppModule);
            return AppModule;
        }());


        /***/
    }),

    /***/
    "./src/app/components/filter/country.names.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return countryNames;
        });
        var countryNames = [
            "Afghanistan",
            "Albania",
            "Algeria",
            "Andorra",
            "Angola",
            "Anguilla",
            "Antigua & Barbuda",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia",
            "Bosnia & Herzegovina",
            "Botswana",
            "Brazil",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Myanmar",
            "Burma",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Cayman Islands",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Comoros",
            "Congo",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "Democratic Republic of the Congo",
            "Denmark",
            "Djibouti",
            "Dominican Republic",
            "Dominica",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Great Britain",
            "Greece",
            "Grenada",
            "Guadeloupe",
            "Guatemala",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Honduras",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Israel and the Occupied Territories",
            "Italy",
            "Ivory Coast (Cote d'Ivoire)",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kosovo",
            "Kuwait",
            "Kyrgyz Republic (Kyrgyzstan)",
            "Laos",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Republic of Macedonia",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mayotte",
            "Mexico",
            "Moldova",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Morocco",
            "Mozambique",
            "Namibia",
            "Nepal",
            "Netherlands",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "North Korea",
            "Norway",
            "Oman",
            "Pacific Islands",
            "Pakistan",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Puerto Rico",
            "Qatar",
            "Reunion",
            "Romania",
            "Russian Federation",
            "Rwanda",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Samoa",
            "Sao Tome and Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Korea",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Suriname",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syria",
            "Tajikistan",
            "Tanzania",
            "Thailand",
            "Timor Leste",
            "Togo",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "USA",
            "Uruguay",
            "Uzbekistan",
            "Venezuela",
            "Vietnam",
            "Yemen",
            "Zambia",
            "Zimbabwe"
        ];


        /***/
    }),

    /***/
    "./src/app/components/filter/filter.component.css": /***/ (function (module, exports) {

        module.exports = ""

        /***/
    }),

    /***/
    "./src/app/components/filter/filter.component.html": /***/ (function (module, exports) {

        module.exports = "<div class=\"row\">\n  <h1>Filter Hotel Offers?</h1>\n  <form #filterForm=\"ngForm\">\n\n    <h3>Trip destination</h3>\n    <div class=\"form-group\">\n      <label for=\"destinationCountry\">Country</label>\n      <select  class=\"form-control\" id=\"destinationCountry\"\n               name=\"destinationCountry\" [(ngModel)]=\"filters.destinationCountry\">\n        <option *ngFor=\"let country of countryNamesOptions\">\n          {{country}}\n        </option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"destinationCity\">City</label>\n      <input type=\"text\" class=\"form-control\" id=\"destinationCity\"\n             name=\"destinationCity\" [(ngModel)]=\"filters.destinationCity\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"regionIds\">Region Id/Ids</label>\n      <input type=\"text\" class=\"form-control\" id=\"regionIds\"\n             name=\"regionIds\" [(ngModel)]=\"filters.regionIds\">\n    </div>\n\n    <hr style=\"clear: both\"/>\n    <h3>Trip time details</h3>\n    <div class=\"form-group\">\n      <label for=\"lengthOfStay\">Length of Stay</label>\n      <input type=\"number\" class=\"form-control\" id=\"lengthOfStay\"\n             name=\"lengthOfStay\" [(ngModel)]=\"filters.lengthOfStay\">\n    </div>\n\n    <div class=\"form-group col-xs-6 col-md-6\">\n      <label for=\"minTripStartDate\">Minimum Trip Start Date</label>\n      <input type=\"date\" class=\"form-control\" id=\"minTripStartDate\"\n             name=\"minTripStartDate\" [(ngModel)]=\"filters.minTripStartDate\">\n    </div>\n\n    <div class=\"form-group col-xs-6 col-md-6\">\n      <label for=\"maxTripStartDate\">Maximum Trip Start Date</label>\n      <input type=\"date\" class=\"form-control\" id=\"maxTripStartDate\"\n             name=\"maxTripStartDate\" [(ngModel)]=\"filters.maxTripStartDate\">\n    </div>\n\n    <hr style=\"clear: both\"/>\n    <h3>Hotel rating</h3>\n    <div class=\"form-group col-xs-6 col-md-6\">\n      <label for=\"minStarRating\">Minimum Star Rating</label>\n      <input type=\"number\" class=\"form-control\" id=\"minStarRating\"\n             name=\"minStarRating\" [(ngModel)]=\"filters.minStarRating\">\n    </div>\n\n    <div class=\"form-group col-xs-6 col-md-6\">\n      <label for=\"maxStarRating\">Maximum Star Rating</label>\n      <input type=\"number\" class=\"form-control\" id=\"maxStarRating\"\n             name=\"maxStarRating\" [(ngModel)]=\"filters.maxStarRating\">\n    </div>\n\n    <div class=\"form-group col-xs-6 col-md-6\">\n      <label for=\"minTotalRate\">Minimum Total Rate</label>\n      <input type=\"number\" class=\"form-control\" id=\"minTotalRate\"\n             name=\"minTotalRate\" [(ngModel)]=\"filters.minTotalRate\">\n    </div>\n\n    <div class=\"form-group col-xs-6 col-md-6\">\n      <label for=\"maxTotalRate\">Maximum Total Rate</label>\n      <input type=\"number\" class=\"form-control\" id=\"maxTotalRate\"\n             name=\"maxTotalRate\" [(ngModel)]=\"filters.maxTotalRate\">\n    </div>\n\n    <div class=\"form-group col-xs-6 col-md-6\">\n      <label for=\"minGuestRating\">Minimum Guest Rating</label>\n      <input type=\"number\" class=\"form-control\" id=\"minGuestRating\"\n             name=\"minGuestRating\" [(ngModel)]=\"filters.minGuestRating\">\n    </div>\n\n    <div class=\"form-group col-xs-6 col-md-6\">\n      <label for=\"maxGuestRating\">Maximum Guest Rating</label>\n      <input type=\"number\" class=\"form-control\" id=\"maxGuestRating\"\n             name=\"maxGuestRating\" [(ngModel)]=\"filters.maxGuestRating\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success btn-group-justified\" (click)=\"filterOffers()\">Filter</button>\n  </form>\n</div>\n"

        /***/
    }),

    /***/
    "./src/app/components/filter/filter.component.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return FilterComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__services_offer_service__ = __webpack_require__("./src/app/services/offer.service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__country_names__ = __webpack_require__("./src/app/components/filter/country.names.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
        var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


        var FilterComponent = /** @class */ (function () {
            function FilterComponent(router, offerService) {
                this.router = router;
                this.offerService = offerService;
                this.countryNamesOptions = __WEBPACK_IMPORTED_MODULE_3__country_names__["a" /* countryNames */];
                this.filters = this.offerService.filters;
            }

            FilterComponent.prototype.ngOnInit = function () {
            };
            FilterComponent.prototype.filterOffers = function () {
                this.updateQueryParams();
            };
            FilterComponent.prototype.updateQueryParams = function () {
                for (var key in this.filters)
                    if (this.filters[key] !== null && this.filters[key].length == 0)
                        this.filters[key] = null;
                this.router.navigate(['.'], {queryParams: this.filters});
            };
            FilterComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
                    selector: 'offer-filter',
                    template: __webpack_require__("./src/app/components/filter/filter.component.html"),
                    styles: [__webpack_require__("./src/app/components/filter/filter.component.css")]
                }),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
                    __WEBPACK_IMPORTED_MODULE_2__services_offer_service__["a" /* OfferService */]])
            ], FilterComponent);
            return FilterComponent;
        }());


        /***/
    }),

    /***/
    "./src/app/components/footer/footer.component.css": /***/ (function (module, exports) {

        module.exports = "ul.footer {\r\n  margin-top: 10px;\r\n  text-align: center;\r\n}\r\n\r\nul.footer li {\r\n  color: #333;\r\n  display: inline-block;\r\n}\r\n\r\n.footer {\r\n  color: whitesmoke;\r\n  -webkit-box-pack : center;\r\n      -ms-flex-pack : center;\r\n          justify-content : center;\r\n  -webkit-box-align : center;\r\n      -ms-flex-align : center;\r\n          align-items : center;\r\n  position: relative;\r\n  margin-top: -35pt;\r\n  /* negative value of footer height */\r\n  height: 35pt;\r\n  clear: both;\r\n}\r\n"

        /***/
    }),

    /***/
    "./src/app/components/footer/footer.component.html": /***/ (function (module, exports) {

        module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"span12\">\n      <ul class=\"footer\">\n        <li>Developed by <a href=\"https://www.linkedin.com/in/muayadsalah/\">Muayad Salah</a></li>&nbsp;&nbsp;\n        <li>Email: muayadsala7@gmail.com</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

        /***/
    }),

    /***/
    "./src/app/components/footer/footer.component.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return FooterComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
        var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

        var FooterComponent = /** @class */ (function () {
            function FooterComponent() {
            }

            FooterComponent.prototype.ngOnInit = function () {
            };
            FooterComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
                    selector: 'footer',
                    template: __webpack_require__("./src/app/components/footer/footer.component.html"),
                    styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
                }),
                __metadata("design:paramtypes", [])
            ], FooterComponent);
            return FooterComponent;
        }());


        /***/
    }),

    /***/
    "./src/app/components/offer-list/offer-item/offer-details/offer-details.component.css": /***/ (function (module, exports) {

        module.exports = ""

        /***/
    }),

    /***/
    "./src/app/components/offer-list/offer-item/offer-details/offer-details.component.html": /***/ (function (module, exports) {

        module.exports = "<p>\n  Hotel Name: {{offer.hotelName}}\n</p>\n<p>\n  Hotel Street Address: {{offer.hotelAddress}}\n</p>\n<p>\n  Total price value: {{offer.totalPriceValue}}\n</p>\n<p>\n  Destination: {{offer.destinationShortName}}, {{offer.destinationCity}}, {{offer.destinationProvince}}, {{offer.destinationCountry}}\n</p>\n<p>\n  Length of stay: {{offer.lengthOfStay}}\n</p>\n"

        /***/
    }),

    /***/
    "./src/app/components/offer-list/offer-item/offer-details/offer-details.component.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return OfferDetailsComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__domain_offer__ = __webpack_require__("./src/app/domain/offer.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
        var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


        var OfferDetailsComponent = /** @class */ (function () {
            function OfferDetailsComponent() {
            }

            OfferDetailsComponent.prototype.ngOnInit = function () {
            };
            __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
                __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__domain_offer__["a" /* Offer */])
            ], OfferDetailsComponent.prototype, "offer", void 0);
            OfferDetailsComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
                    selector: 'offer-details',
                    template: __webpack_require__("./src/app/components/offer-list/offer-item/offer-details/offer-details.component.html"),
                    styles: [__webpack_require__("./src/app/components/offer-list/offer-item/offer-details/offer-details.component.css")]
                }),
                __metadata("design:paramtypes", [])
            ], OfferDetailsComponent);
            return OfferDetailsComponent;
        }());


        /***/
    }),

    /***/
    "./src/app/components/offer-list/offer-item/offer-item.component.css": /***/ (function (module, exports) {

        module.exports = ".offer-item {\r\n  display: block;\r\n  background-color: whitesmoke;\r\n  color: black;\r\n  width: 100%;\r\n  margin: 0pt;\r\n  padding: 5pt;\r\n}\r\n"

        /***/
    }),

    /***/
    "./src/app/components/offer-list/offer-item/offer-item.component.html": /***/ (function (module, exports) {

        module.exports = "<div class=\"row offer-item\">\n  <div class=\"col-sm-6\">\n    <img src={{offer.hotelImageUrl}}>\n  </div>\n  <div class=\"col-sm-6\">\n    <offer-details [offer]=\"offer\" ></offer-details>\n  </div>\n</div>\n"

        /***/
    }),

    /***/
    "./src/app/components/offer-list/offer-item/offer-item.component.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return OfferItemComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__domain_offer__ = __webpack_require__("./src/app/domain/offer.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
        var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


        var OfferItemComponent = /** @class */ (function () {
            function OfferItemComponent() {
            }

            OfferItemComponent.prototype.ngOnInit = function () {
            };
            __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
                __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__domain_offer__["a" /* Offer */])
            ], OfferItemComponent.prototype, "offer", void 0);
            OfferItemComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
                    selector: 'offer-item',
                    template: __webpack_require__("./src/app/components/offer-list/offer-item/offer-item.component.html"),
                    styles: [__webpack_require__("./src/app/components/offer-list/offer-item/offer-item.component.css")]
                }),
                __metadata("design:paramtypes", [])
            ], OfferItemComponent);
            return OfferItemComponent;
        }());


        /***/
    }),

    /***/
    "./src/app/components/offer-list/offer-list.component.css": /***/ (function (module, exports) {

        module.exports = ".offer {\r\n  list-style-type: none;\r\n  padding: 5pt;\r\n}\r\n"

        /***/
    }),

    /***/
    "./src/app/components/offer-list/offer-list.component.html": /***/ (function (module, exports) {

        module.exports = "<div>\n  <div *ngIf=\"offers.length else no_offers_content\">\n    <li class=\"offer\" *ngFor=\"let offer of offers\">\n      <offer-item [offer]=\"offer\"></offer-item>\n    </li>\n  </div>\n  <ng-template #no_offers_content>\n    <h3>No offers to show!</h3>\n  </ng-template>\n</div>\n"

        /***/
    }),

    /***/
    "./src/app/components/offer-list/offer-list.component.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return OfferListComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__services_offer_service__ = __webpack_require__("./src/app/services/offer.service.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
        var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


        var OfferListComponent = /** @class */ (function () {
            function OfferListComponent(offerService) {
                this.offerService = offerService;
                this.offers = [];
            }

            OfferListComponent.prototype.ngOnInit = function () {
                var _this = this;
                // this.offers$ = this.offerService.offers$;
                this.offerService.offers$.subscribe(function (offers) {
                    return _this.offers = offers;
                });
            };
            OfferListComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
                    selector: 'offer-list',
                    template: __webpack_require__("./src/app/components/offer-list/offer-list.component.html"),
                    styles: [__webpack_require__("./src/app/components/offer-list/offer-list.component.css")]
                }),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_offer_service__["a" /* OfferService */]])
            ], OfferListComponent);
            return OfferListComponent;
        }());


        /***/
    }),

    /***/
    "./src/app/domain/filter-options.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return FilterOptions;
        });
        var FilterOptions = /** @class */ (function () {
            function FilterOptions(destinationCity, destinationCountry, regionIds, lengthOfStay, minTripStartDate, maxTripStartDate, minStarRating, maxStarRating, minTotalRate, maxTotalRate, minGuestRating, maxGuestRating) {
                if (destinationCity === void 0) {
                    destinationCity = null;
                }
                if (destinationCountry === void 0) {
                    destinationCountry = null;
                }
                if (regionIds === void 0) {
                    regionIds = null;
                }
                if (lengthOfStay === void 0) {
                    lengthOfStay = null;
                }
                if (minTripStartDate === void 0) {
                    minTripStartDate = null;
                }
                if (maxTripStartDate === void 0) {
                    maxTripStartDate = null;
                }
                if (minStarRating === void 0) {
                    minStarRating = null;
                }
                if (maxStarRating === void 0) {
                    maxStarRating = null;
                }
                if (minTotalRate === void 0) {
                    minTotalRate = null;
                }
                if (maxTotalRate === void 0) {
                    maxTotalRate = null;
                }
                if (minGuestRating === void 0) {
                    minGuestRating = null;
                }
                if (maxGuestRating === void 0) {
                    maxGuestRating = null;
                }
                this.destinationCity = destinationCity;
                this.destinationCountry = destinationCountry;
                this.regionIds = regionIds;
                this.lengthOfStay = lengthOfStay;
                this.minTripStartDate = minTripStartDate;
                this.maxTripStartDate = maxTripStartDate;
                this.minStarRating = minStarRating;
                this.maxStarRating = maxStarRating;
                this.minTotalRate = minTotalRate;
                this.maxTotalRate = maxTotalRate;
                this.minGuestRating = minGuestRating;
                this.maxGuestRating = maxGuestRating;
            }

            return FilterOptions;
        }());


        /***/
    }),

    /***/
    "./src/app/domain/offer.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return Offer;
        });
        var Offer = /** @class */ (function () {
            function Offer(destinationShortName, destinationCountry, destinationCity, destinationProvince, hotelName, hotelAddress, hotelStarRating, hotelGuestReviewRating, hotelReviewTotal, averagePriceValue, totalPriceValue, crossOutPriceValue, originalPricePerNight, percentSavings, priceCurrency, travelStartDate, travelEndDate, lengthOfStay, hotelImageUrl, hotelInfositeUrl, hotelSearchResultUrl) {
                this.destinationShortName = destinationShortName;
                this.destinationCountry = destinationCountry;
                this.destinationCity = destinationCity;
                this.destinationProvince = destinationProvince;
                this.hotelName = hotelName;
                this.hotelAddress = hotelAddress;
                this.hotelStarRating = hotelStarRating;
                this.hotelGuestReviewRating = hotelGuestReviewRating;
                this.hotelReviewTotal = hotelReviewTotal;
                this.averagePriceValue = averagePriceValue;
                this.totalPriceValue = totalPriceValue;
                this.crossOutPriceValue = crossOutPriceValue;
                this.originalPricePerNight = originalPricePerNight;
                this.percentSavings = percentSavings;
                this.priceCurrency = priceCurrency;
                this.travelStartDate = travelStartDate;
                this.travelEndDate = travelEndDate;
                this.lengthOfStay = lengthOfStay;
                this.hotelImageUrl = hotelImageUrl;
                this.hotelInfositeUrl = hotelInfositeUrl;
                this.hotelSearchResultUrl = hotelSearchResultUrl;
            }

            return Offer;
        }());


        /***/
    }),

    /***/
    "./src/app/services/offer.service.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return OfferService;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__domain_filter_options__ = __webpack_require__("./src/app/domain/filter-options.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
        var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


        var OfferService = /** @class */ (function () {
            function OfferService(http, route) {
                var _this = this;
                this.http = http;
                this.route = route;
                this.filters = new __WEBPACK_IMPORTED_MODULE_4__domain_filter_options__["a" /* FilterOptions */]();
                this.queryParams$ = this.route.queryParamMap.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (params) {
                    return params;
                }));
                this.queryParams$.subscribe(function (queryParams) {
                    _this.filters.destinationCity = queryParams.get("destinationCity");
                    _this.filters.destinationCountry = queryParams.get("destinationCountry");
                    _this.filters.lengthOfStay = queryParams.get("lengthOfStay");
                    _this.filters.minTripStartDate = queryParams.get("minTripStartDate");
                    _this.filters.maxTripStartDate = queryParams.get("maxTripStartDate");
                    _this.filters.minStarRating = queryParams.get("minStarRating");
                    _this.filters.maxStarRating = queryParams.get("maxStarRating");
                    _this.filters.minTotalRate = queryParams.get("minTotalRate");
                    _this.filters.maxTotalRate = queryParams.get("maxTotalRate");
                    _this.filters.minGuestRating = queryParams.get("minGuestRating");
                    _this.filters.maxGuestRating = queryParams.get("maxGuestRating");
                    if (queryParams.get("regionIds"))
                        _this.filters.regionIds = queryParams.get("regionIds").split(",");
                    else
                        _this.filters.regionIds = null;
        });
                this.offers$ = this.queryParams$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* switchMap */])(function (queryParams) {
                    var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
                    for (var key in _this.filters)
                        params.append(key, _this.filters[key]);
                    return _this.http.get('/api/offers?' + _this.calculateQueryParamsString());
                }));
            }

            OfferService.prototype.calculateQueryParamsString = function () {
                var query = '';
                for (var key in this.filters)
                    if (this.filters[key])
                        query += key + "=" + this.filters[key] + "&";
                return query.length > 0 ? query.substr(0, query.length - 1) : query;
            };
            OfferService = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
                    __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
            ], OfferService);
            return OfferService;
        }());


        /***/
    }),

    /***/
    "./src/environments/environment.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return environment;
        });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
        var environment = {
            production: false
        };


        /***/
    }),

    /***/
    "./src/main.ts": /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");


        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
            .catch(function (err) {
                return console.log(err);
            });


        /***/
    }),

    /***/
    0: /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__("./src/main.ts");


        /***/
    })

}, [0]);
//# sourceMappingURL=main.bundle.js.map