webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="about-header">\n    <img src="assets/img/ionic-logo-white.svg" alt="ionic logo">\n  </div>\n  <div padding class="about-info">\n    <h4>Ionic Conference</h4>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY" max="2056" [(ngModel)]="conferenceDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pin" item-start></ion-icon>\n        <ion-label>Location</ion-label>\n        <ion-select>\n          <ion-option value="madison" selected>Madison, WI</ion-option>\n          <ion-option value="austin">Austin, TX</ion-option>\n          <ion-option value="chicago">Chicago, IL</ion-option>\n          <ion-option value="seattle">Seattle, WA</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      The Ionic Conference is a one-day conference featuring talks from the\n      Ionic team. It is focused on Ionic applications being built with\n      Ionic 2. This includes migrating apps from Ionic 1 to Ionic 2,\n      Angular concepts, Webpack, Sass, and many other technologies used\n      in Ionic 2. Tickets are completely sold out, and we’re expecting\n      more than 1000 developers – making this the largest Ionic\n      conference ever!\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccueilPage = (function () {
    function AccueilPage(navCtrl, navParams, http, storage, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.posts = null;
        this.url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";
        this.storage.get('url').then(function (val) {
            if (val != null) {
                _this.url = val;
            }
            _this.http.get(_this.url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.posts = data;
                console.log(_this.posts);
                console.log(_this.posts.title);
            });
        });
    }
    AccueilPage.prototype.toggleMenu = function () {
        console.log('here');
        this.menuCtrl.toggle();
    };
    AccueilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccueilPage');
    };
    AccueilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/accueil/accueil.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle (click)=toggleMenu()>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Accueil</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="card-background-page" padding>\n    <!--<h3 *ngIf="posts">{{posts.title}}</h3>\n\n  <p *ngIf="posts">\n      Description of the event : {{posts.description}}\n  </p>\n  <p *ngIf="posts">\n      Date : {{posts.DateDebut}}  Horraire (à traduire, j\'ai pas trouvé de trad satisfaisante) : {{posts.HeureDebut}} - {{posts.HeureFin}}\n  </p>\n  <p *ngIf="posts">\n      Place : {{posts.Lieu}}\n  </p>\n  <p *ngIf="posts">\n      Organiser : {{posts.Organisateur}}\n  </p>-->\n\n    <ion-card *ngIf="posts">\n        <img [src]="posts.image"/>\n        <div class="card-title" >{{posts.title}}</div>\n        <div class="card-subtitle"> Le {{posts.DateDebut}}</div>\n    </ion-card>\n\n    <div class="description" *ngIf="posts">\n        <div class="title">DESCRIPTION</div>\n        <div class="paragraphe">{{posts.description}}</div>\n    </div>\n\n    <ion-list class="event-details" no-lines *ngIf="posts">\n        <ion-item>\n            <ion-icon class="logo" name="md-compass" item-start></ion-icon>\n            {{posts.Lieu}}\n        </ion-item>\n        <ion-item>\n            <ion-icon class="logo" name="md-calendar" item-start></ion-icon>\n            Le {{posts.DateDebut}}\n        </ion-item>\n        <ion-item>\n            <ion-icon class="logo" name="logo-euro" item-start></ion-icon>\n            {{posts.prix}}\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/accueil/accueil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
    ], AccueilPage);
    return AccueilPage;
}());

//# sourceMappingURL=accueil.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_conference_data__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getMap().subscribe(function (mapData) {
            var mapEle = _this.mapElement.nativeElement;
            var map = new google.maps.Map(mapEle, {
                center: mapData.find(function (d) { return d.center; }),
                zoom: 16
            });
            mapData.forEach(function (markerData) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + markerData.name + "</h5>"
                });
                var marker = new google.maps.Marker({
                    position: markerData,
                    map: map,
                    title: markerData.name
                });
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
            google.maps.event.addListenerOnce(map, 'idle', function () {
                mapEle.classList.add('show-map');
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="map-page">\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_filter_schedule_filter__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';




var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, user) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Schedule');
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.scheduleList && this.scheduleList.closeSlidingItems();
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: sessionData.id, name: sessionData.name });
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(sessionData.name);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Favorite Added',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Would you like to remove this session from your favorites?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(sessionData.name);
                        _this.updateSchedule();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    SchedulePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
            // simulate a network request that would take longer
            // than just pulling from out local json file
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: 'Sessions have been updated.',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */])
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n      <ion-segment-button value="all">\n        All\n      </ion-segment-button>\n      <ion-segment-button value="favorites">\n        Favorites\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="updateSchedule()"\n                   placeholder="Search">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list #scheduleList [hidden]="shownSessions === 0">\n\n    <ion-item-group *ngFor="let group of groups" [hidden]="group.hide">\n\n      <ion-item-divider sticky>\n        <ion-label>\n          {{group.time}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor="let session of group.sessions" #slidingItem [attr.track]="session.tracks[0] | lowercase" [hidden]="session.hide">\n\n        <button ion-item (click)="goToSessionDetail(session)">\n          <h3>{{session.name}}</h3>\n          <p>\n            {{session.timeStart}} &mdash;\n            {{session.timeEnd}}:\n            {{session.location}}\n          </p>\n        </button>\n\n        <ion-item-options>\n          <button ion-button color="favorite" (click)="addFavorite(slidingItem, session)" *ngIf="segment === \'all\'">\n            Favorite\n          </button>\n          <button ion-button color="danger" (click)="removeFavorite(slidingItem, session, \'Remove Favorite\')" *ngIf="segment === \'favorites\'">\n            Remove\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-item-group>\n\n  </ion-list>\n\n  <ion-list-header [hidden]="shownSessions > 0">\n      No Sessions Found\n  </ion-list-header>\n\n  <ion-fab bottom right #fab>\n    <button ion-fab><ion-icon name="share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="vimeo" (click)="openSocial(\'Vimeo\', fab)"><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab color="google" (click)="openSocial(\'Google+\', fab)"><ion-icon name="logo-googleplus"></ion-icon></button>\n      <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n\n</ion-content>'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionDetailPage = (function () {
    function SessionDetailPage(dataProvider, navParams) {
        this.dataProvider = dataProvider;
        this.navParams = navParams;
    }
    SessionDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data &&
                data.schedule &&
                data.schedule[0] &&
                data.schedule[0].groups) {
                for (var _i = 0, _a = data.schedule[0].groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    if (group && group.sessions) {
                        for (var _b = 0, _c = group.sessions; _b < _c.length; _b++) {
                            var session = _c[_b];
                            if (session && session.id === _this.navParams.data.sessionId) {
                                _this.session = session;
                                break;
                            }
                        }
                    }
                }
            }
        });
    };
    SessionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-session-detail',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/session-detail/session-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="session">{{session.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="session">\n    <h1>{{session.name}}</h1>\n    <h4 *ngFor="let speaker of session?.speakers">\n    {{speaker.name}}\n  </h4>\n    <p>\n      {{session.timeStart}} - {{session.timeEnd}}\n    </p>\n    <p>{{session.location}}</p>\n    <p>{{session.description}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/session-detail/session-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());

//# sourceMappingURL=session-detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var SpeakerListPage = (function () {
    function SpeakerListPage(actionSheetCtrl, navCtrl, confData, config, inAppBrowser) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.speakers = [];
    }
    SpeakerListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getSpeakers().subscribe(function (speakers) {
            _this.speakers = speakers;
        });
    };
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: session.id });
    };
    SpeakerListPage.prototype.goToSpeakerDetail = function (speaker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], { speakerId: speaker.id });
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.inAppBrowser.create("https://twitter.com/" + speaker.twitter, '_blank');
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share ' + speaker.name,
            buttons: [
                {
                    text: 'Copy Link',
                    handler: function () {
                        console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                        if (window['cordova'] && window['cordova'].plugins.clipboard) {
                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                        }
                    }
                },
                {
                    text: 'Share via ...'
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        var mode = this.config.get('mode');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact ' + speaker.name,
            buttons: [
                {
                    text: "Email ( " + speaker.email + " )",
                    icon: mode !== 'ios' ? 'mail' : null,
                    handler: function () {
                        window.open('mailto:' + speaker.email);
                    }
                },
                {
                    text: "Call ( " + speaker.phone + " )",
                    icon: mode !== 'ios' ? 'call' : null,
                    handler: function () {
                        window.open('tel:' + speaker.phone);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-list',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Speakers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content speaker-list">\n  <ion-list [virtualScroll]="speakers">\n    <ion-grid fixed>\n      <ion-row align-items-stretch>\n\n        <ion-col col-12 col-md-6 align-self-stretch align-self-center *virtualItem="let speaker" approxItemHeight="457px">\n\n          <ion-card class="speaker-card">\n            <ion-card-header>\n              <button ion-item detail-none (click)="goToSpeakerDetail(speaker)">\n                <ion-avatar item-start>\n                  <img [src]="speaker.profilePic" alt="Speaker profile pic">\n                </ion-avatar>\n                {{speaker.name}}\n              </button>\n            </ion-card-header>\n\n            <ion-card-content class="outer-content">\n              <ion-list>\n                <button ion-item *ngFor="let session of speaker.sessions" (click)="goToSessionDetail(session)">\n                  <h3>{{session.name}}</h3>\n                </button>\n\n                <button ion-item (click)="goToSpeakerDetail(speaker)">\n                  <h3>About {{speaker.name}}</h3>\n                </button>\n              </ion-list>\n            </ion-card-content>\n\n            <ion-row no-padding>\n              <ion-col col-12 col-lg-auto text-center text-lg-left>\n                <button ion-button clear small color="primary" icon-start (click)="goToSpeakerTwitter(speaker)">\n                  <ion-icon name="logo-twitter"></ion-icon>\n                  Tweet\n                </button>\n              </ion-col>\n              <ion-col col-12 col-lg-auto text-center>\n                <button ion-button clear small color="primary" icon-start (click)="openSpeakerShare(speaker)">\n                  <ion-icon name=\'share-alt\'></ion-icon>\n                  Share\n                </button>\n              </ion-col>\n              <ion-col col-12 col-lg-auto text-center text-lg-right>\n                <button ion-button clear small color="primary" icon-start (click)="openContact(speaker)">\n                  <ion-icon name=\'chatboxes\'></ion-icon>\n                  Contact\n                </button>\n              </ion-col>\n            </ion-row>\n\n          </ion-card>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/speaker-list/speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SpeakerListPage);
    return SpeakerListPage;
}());

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.signup = { username: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Signup</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n	</div>\n\n	<form #signupForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Username</ion-label>\n				<ion-input [(ngModel)]="signup.username" name="username" type="text" #username="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Username is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n		</div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2/getting-started')\">Learn Ionic</button>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2')\">Documentation</button>\n      <button ion-item (click)=\"close('http://showcase.ionicframework.com')\">Showcase</button>\n      <button ion-item (click)=\"close('https://github.com/ionic-team/ionic')\">GitHub Repo</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalisationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_beacon_detector__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LocalisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalisationPage = (function () {
    function LocalisationPage(navCtrl, navParams, changeDetectorRef, settings, beaconDetector, restProvider, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.changeDetectorRef = changeDetectorRef;
        this.settings = settings;
        this.beaconDetector = beaconDetector;
        this.restProvider = restProvider;
        this.http = http;
        this.beacons = [];
        this.handleBeaconStatusChanged = function (beacons) {
            var maxAge = 10000;
            var displayableBeacons = [];
            var currentTimestamp = (new Date()).getTime();
            for (var key in beacons) {
                var beacon = beacons[key];
                var isWithinRange = _this.settings.accuracyThreshold === 0 || beacon.accuracy <= _this.settings.accuracyThreshold;
                var age = (currentTimestamp - beacon.timestamp);
                var isWithinAgeLimit = age <= maxAge;
                if (isWithinRange && isWithinAgeLimit) {
                    for (var i in _this.standJson) {
                        var idBeacon = _this.standJson[i].minor;
                        if (idBeacon == beacon.minor) {
                            beacon.nom = _this.standJson[i].nom;
                            beacon.image = _this.standJson[i].image;
                            beacon.lieu = _this.standJson[i].lieu;
                            beacon.heureDebut = _this.standJson[i].heureDebut;
                            beacon.heureFin = _this.standJson[i].heureFin;
                            beacon.description = _this.standJson[i].description;
                        }
                    }
                    displayableBeacons.push(beacon);
                }
            }
            console.log(_this.beacons);
            _this.beacons = displayableBeacons.sort(function (a, b) { return a.accuracy - b.accuracy; });
            _this.changeDetectorRef.detectChanges();
        };
        beaconDetector.addBeaconStatusChangedHandler(this.handleBeaconStatusChanged);
        this.fetchData();
    }
    LocalisationPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.restProvider.apiUrlEvent)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.dataJson = res;
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    LocalisationPage.prototype.ngOnDestroy = function () {
        this.changeDetectorRef.detach();
    };
    LocalisationPage.prototype.ngOnInit = function () {
        this.standJson = this.dataJson.activitesBalise;
        this.changeDetectorRef.attach();
        console.log();
    };
    LocalisationPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    LocalisationPage.prototype.fetchData = function () {
        var _this = this;
        this.restProvider.fetchEvent()
            .then(function (data) {
            _this.dataJson = data;
            console.log(data);
        });
    };
    LocalisationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-localisation',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/localisation/localisation.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Activités à proximité</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="cards-bg">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class="radar">\n    <div class="pointer"></div>\n  </div>\n  <ion-card class="adv-map ion-card-event" *ngFor="let beacon of beacons">\n    <div style="position: relative" (click)="showDetailPage(beacon)">\n      <img src="https://s3.eu-west-3.amazonaws.com/pld-smart/default.png" [src]="beacon.image">\n      <ion-fab right top>\n        <button ion-fab class="fab-map">\n          <ion-icon name=\'star\'></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n    <ion-item>\n      <h2>{{ beacon.nom }}</h2>\n      <h5>{{ beacon.lieu }} <ion-icon color="subtle" small name=\'pin\'></ion-icon></h5>\n      <h5 style="margin-top: 22px;">{{ beacon.heureDebut }} - {{ beacon.heureFin }} <ion-icon color="subtle" small name=\'time\' md=\'md-time\'></ion-icon></h5>\n      <p>{{ beacon.description }}</p>\n    </ion-item>\n    <ion-item actions>\n      <span ion-text item-start color="secondary" class="item-bold">{{beacon.timestamp | date:\'h:mm:ss a\'}}</span>\n      <span ion-text item-start color="subtle" class="item-bold-two">({{beacon.accuracy}}m)</span>\n      <button ion-button color="primary" clear item-end icon-start class="go-button" (click)="showDetailPage(beacon)">\n        <ion-icon name=\'navigate\'></ion-icon> Go to stand\n      </button>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/localisation/localisation.html"*/,
            styles: ['localisation.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_settings__["a" /* Settings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_settings__["a" /* Settings */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_beacon_detector__["a" /* BeaconDetector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_beacon_detector__["a" /* BeaconDetector */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_rest__["a" /* Rest */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_rest__["a" /* Rest */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _g || Object])
    ], LocalisationPage);
    return LocalisationPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=localisation.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function _window() { return window; }
var LocationManager = (function () {
    function LocationManager() {
    }
    LocationManager.prototype.startFake = function (uuid, didRangeBeaconsInRegionHandler) {
        var fakeBeacons = [
            { uuid: uuid, major: 5, minor: 3001, rssi: Math.floor(Math.random() * 50) + 30, tx: -58 },
            { uuid: uuid, major: 5, minor: 3002, rssi: Math.floor(Math.random() * 50) + 30, tx: -58 },
            { uuid: uuid, major: 5, minor: 3004, rssi: Math.floor(Math.random() * 50) + 30, tx: -58 }
        ];
        setInterval(function () {
            for (var _i = 0, fakeBeacons_1 = fakeBeacons; _i < fakeBeacons_1.length; _i++) {
                var fakeBeacon = fakeBeacons_1[_i];
                fakeBeacon.rssi += Math.floor(Math.random() * 20 - 10);
                fakeBeacon.rssi = Math.min(Math.max(fakeBeacon.rssi, 60), 100);
                fakeBeacon.tx += Math.floor(Math.random() * 20 - 10);
                fakeBeacon.tx = Math.min(Math.max(fakeBeacon.tx, -100), -50);
            }
            didRangeBeaconsInRegionHandler({ beacons: fakeBeacons });
        }, 3000);
    };
    // private stopFake(uuid, didRangeBeaconsInRegionHandler): void {
    //   let fakeBeacons = [];
    //   console.log(fakeBeacons);
    //   didRangeBeaconsInRegionHandler({beacons: fakeBeacons});
    // }
    LocationManager.prototype.start = function (uuid, didRangeBeaconsInRegionHandler) {
        var window = _window();
        if (!window.cordova) {
            // If running in a browser (ionic serve) locationManger is not available, so fake it
            return this.startFake(uuid, didRangeBeaconsInRegionHandler);
        }
        var locationManager = window.cordova.plugins.locationManager;
        locationManager.enableBluetooth();
        var delegate = new locationManager.Delegate();
        delegate.didRangeBeaconsInRegion = didRangeBeaconsInRegionHandler;
        locationManager.setDelegate(delegate);
        var beaconRegion = new locationManager.BeaconRegion('beacon-test', uuid);
        locationManager.startRangingBeaconsInRegion(beaconRegion);
    };
    ;
    LocationManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LocationManager);
    return LocationManager;
}());

//# sourceMappingURL=location-manager.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventModalPage = (function () {
    function EventModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    EventModalPage.prototype.ionViewCanEnter = function () {
        this.msg = this.navParams.get('msg');
        this.url = this.navParams.get('url');
        this.header = this.navParams.get('header');
        this.title = this.navParams.get('title');
        this.image = this.navParams.get('image');
        this.message = this.navParams.get('message');
        this.btn_txt = this.navParams.get('btn_txt');
        this.template = this.navParams.get('template');
    };
    EventModalPage.prototype.openLink = function () {
        window.open(this.url, '_system', 'location=yes');
    };
    EventModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-modal',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/event-modal/event-modal.html"*/'<ion-header>\n\n  <ion-navbar color="primary" text-center>\n    <ion-title>{{ header }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content [ngClass]="{\'flyer-content\': template == \'flyer\'}">\n  <div [ngClass]="{\'about-header\': (template == \'text\' || template == \'form\'), \'flyer-header\': template == \'flyer\'}" [style.background-image]="\'url(\' + image + \')\'">\n  </div>\n  <div padding class="about-info">\n    <h4>{{ title }}</h4>\n    <p>\n      {{ message }}\n    </p>\n    <ion-item [ngClass]="{\'hidden\': template != \'form\'}">\n	    <ion-label color="primary" floating>{{ btn_txt }}</ion-label>\n	    <ion-input [(ngModel)]="email"></ion-input>\n	</ion-item>\n    <a [ngClass]="{\'hidden\': template == \'form\'}" (click)="openLink()" *ngIf="url" class="btn-link-modal">{{ btn_txt }}</a>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button block (click)="closeModal()">Close</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/event-modal/event-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], EventModalPage);
    return EventModalPage;
}());

//# sourceMappingURL=event-modal.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_detail_activities_detail__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
* Generated class for the ActivitiesPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ActivitiesPage = (function () {
    function ActivitiesPage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.activitiesDetailPage = __WEBPACK_IMPORTED_MODULE_2__activities_detail_activities_detail__["a" /* ActivitiesDetailPage */];
        this.url = "https://s3.eu-west-3.amazonaws.com/pld-smart/rif.json";
        this.posts = null;
        //this.pushPage = LoginPage;
        this.storage = storage;
        this.params = { id: 42 };
        this.list = "all";
        this.storage.get('oldUrl').then(function (val) {
            _this.oldUrl = val;
            _this.storage.get('url').then(function (val) {
                if (val != null) {
                    _this.url = val;
                }
                if (_this.url != _this.oldUrl) {
                    var favorites = [];
                    _this.storage.set('favorites', favorites);
                    _this.oldUrl = _this.url;
                    _this.storage.set('oldUrl', _this.oldUrl);
                }
                _this.http.get(_this.url).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.posts = data;
                    if (_this.posts != null) {
                        _this.storage.get('favorites').then(function (favorites) {
                            console.log("posts : ", _this.posts);
                            favorites.forEach(function (id) {
                                _this.posts.activitesBalise[id].favorite = true;
                            });
                        });
                    }
                });
            });
        });
    }
    ActivitiesPage.prototype.changeFavorite = function (activity) {
        console.log(this.posts.activitesBalise);
        this.posts.activitesBalise[activity.id].favorite = !this.posts.activitesBalise[activity.id].favorite;
    };
    ActivitiesPage.prototype.showDetailPage = function (activity) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__activities_detail_activities_detail__["a" /* ActivitiesDetailPage */], {
            id: activity.id
        });
    };
    ActivitiesPage.prototype.ionViewWillLeave = function () {
        var favorites = [];
        for (var _i = 0, _a = this.posts.activitesBalise; _i < _a.length; _i++) {
            var activity = _a[_i];
            if (activity.favorite == true) {
                favorites.push(activity.id);
            }
        }
        this.storage.set('favorites', favorites);
    };
    ActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activities',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/activities/activities.html"*/'<ion-header>\n    <ion-navbar text-center>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="toolbar-txt">Liste des Activités</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div padding>\n        <ion-segment [(ngModel)]="list">\n            <ion-segment-button class="segment-title" value="all">\n                Tout\n            </ion-segment-button>\n            <ion-segment-button class="segment-title" value="favorite">\n                Favoris\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div *ngIf="posts">\n    <div [ngSwitch]="list">\n        <ion-list *ngSwitchCase="\'all\'">\n            <ion-item *ngFor="let activity of posts.activitesBalise" >\n              <button class ="detailButton" (click)="showDetailPage(activity)">\n                  {{activity.nom}}</button>\n                <ion-icon *ngIf="activity.favorite" name="md-star" class="star-icon" item-end (click)="changeFavorite(activity)"></ion-icon>\n                <ion-icon *ngIf="!activity.favorite" name="md-star-outline" item-end (click)="changeFavorite(activity)"></ion-icon>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <div [ngSwitch]="list">\n        <ion-list *ngSwitchCase="\'favorite\'">\n            <div *ngFor="let activity of posts.activitesBalise">\n                <ion-item class="buttonList" detail-push *ngIf="activity.favorite">\n                    <!-- <ion-icon name="briefcase" item-start></ion-icon> -->\n                    {{activity.nom}}\n                    <ion-icon *ngIf="activity.favorite" name="md-star" class="star-icon" item-end (click)="changeFavorite(activity)"></ion-icon>\n                    <ion-icon *ngIf="!activity.favorite" name="md-star-outline" item-end (click)="changeFavorite(activity)"></ion-icon>\n                </ion-item>\n            </div>\n        </ion-list>\n    </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/activities/activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ActivitiesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/
var ActivitiesDetailPage = (function () {
    function ActivitiesDetailPage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.posts = null;
        this.id = null;
        this.url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";
        this.storage.get('url').then(function (val) {
            if (val != null) {
                _this.url = val;
            }
            _this.http.get(_this.url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.posts = data;
                _this.id = _this.navParams.get("id");
                _this.posts.activitesBalise[0].nom = _this.posts.activitesBalise[_this.id].nom;
                _this.posts.activitesBalise[0].lieu = _this.posts.activitesBalise[_this.id].lieu;
                _this.posts.activitesBalise[0].heureDebut = _this.posts.activitesBalise[_this.id].heureDebut;
                _this.posts.activitesBalise[0].heureFin = _this.posts.activitesBalise[_this.id].heureFin;
                _this.posts.activitesBalise[0].nextActivity = _this.posts.activitesBalise[_this.id].nextActivity;
                _this.posts.activitesBalise[0].description = _this.posts.activitesBalise[_this.id].description;
                _this.posts.activitesBalise[0].intervenants = _this.posts.activitesBalise[_this.id].intervenants;
                _this.posts.activitesBalise[0].image = _this.posts.activitesBalise[_this.id].image;
                _this.posts.activitesBalise[0].minor = _this.posts.activitesBalise[_this.id].minor;
                console.log(_this.posts.activitesBalise[0].image);
            });
        });
    }
    ActivitiesDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesDetailPage');
    };
    ActivitiesDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activities-detail',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/activities-detail/activities-detail.html"*/'<!--\n  Generated template for the ActivitiesDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="posts">{{posts.activitesBalise[0].nom}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background-page">\n  <ion-card *ngIf="posts">\n        <img [src]="posts.activitesBalise[0].image"/>\n    </ion-card>\n\n    <div class="description" *ngIf="posts">\n        <div class="title">DESCRIPTION</div>\n        <ion-list>\n            <div *ngFor = "let item of posts.activitesBalise[0].description;">\n                {{item.p}}\n            </div>\n        </ion-list>\n    </div>\n    <ion-list *ngIf="posts">\n        <div class="title">INTERVENANTS</div>\n        <ion-item *ngFor = "let item of posts.activitesBalise[0].intervenants;">\n            {{item.nom}}\n        </ion-item>\n    </ion-list>\n\n    <ion-list class="event-details" no-lines *ngIf="posts">\n        <ion-item>\n            <ion-icon class="logo" name="md-compass" item-start></ion-icon>\n            {{posts.activitesBalise[0].lieu}}\n        </ion-item>\n        <ion-item>\n            <ion-icon class="logo" name="clock" item-start></ion-icon>\n        De {{posts.activitesBalise[0].heureDebut}} à {{posts.activitesBalise[0].heureFin}}\n        </ion-item>\n        <ion-item>\n            <ion-icon class="logo" name="md-calendar" item-start></ion-icon>\n            Prochaine activité:  {{posts.activitesBalise[0].nextActivity}}\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/activities-detail/activities-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ActivitiesDetailPage);
    return ActivitiesDetailPage;
}());

//# sourceMappingURL=activities-detail.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_beacon_detector__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RealMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RealMapPage = (function () {
    function RealMapPage(navCtrl, navParams, changeDetectorRef, settings, beaconDetector, restProvider, http, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.changeDetectorRef = changeDetectorRef;
        this.settings = settings;
        this.beaconDetector = beaconDetector;
        this.restProvider = restProvider;
        this.http = http;
        this.events = events;
        this.alive = true;
        this.url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";
        this.beacons = [];
        this.map = {};
        this.minorb = 0;
        this.points = {};
        this.showBeaconsBtnTxt = 'eye-off';
        this.pathVisibility = 'hidden';
        this.platform = 'Unknown';
        this.deviceId = 'NA';
        this.handleBeaconStatusChanged = function (beacons) {
            var maxAge = 10000;
            var displayableBeacons = [];
            var currentTimestamp = (new Date()).getTime();
            for (var key in beacons) {
                var beacon = beacons[key];
                var isWithinRange = _this.settings.accuracyThreshold === 0 || beacon.accuracy <= _this.settings.accuracyThreshold;
                var age = (currentTimestamp - beacon.timestamp);
                var isWithinAgeLimit = age <= maxAge;
                if (isWithinRange && isWithinAgeLimit) {
                    displayableBeacons.push(beacon);
                }
            }
            _this.beacons = displayableBeacons.sort(function (a, b) { return a.minor - b.minor; });
            _this.events.subscribe('coordinates:changed', function (new_x, new_y) {
                _this.x = new_x;
                _this.y = new_y;
            });
            console.log(_this.beacons);
            console.log(_this.x);
            console.log(_this.y);
            _this.changeDetectorRef.detectChanges();
        };
        this.clearPath = function () {
            this.pathVisibility = 'hidden';
        };
        beaconDetector.addBeaconStatusChangedHandler(this.handleBeaconStatusChanged);
        this.fetchData();
    }
    RealMapPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.restProvider.apiUrl)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.dataJson = res;
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RealMapPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    RealMapPage.prototype.ngOnInit = function () {
        this.destPoints = this.dataJson.point_of_interests;
        this.map = this.dataJson.map_paths;
        this.graph = new Graph(this.map, true);
        this.pointB = this.destPoints[0];
        this.image = this.dataJson.img_map;
        this.imageHeight = this.dataJson.img_height;
        this.x = this.dataJson.entry_point[0].x;
        this.y = this.dataJson.entry_point[0].y;
        this.polygone = this.x + "-8," + this.y + " " + this.x + "+8," + this.y + " " + this.x + "," + this.y + "-16";
        this.changeDetectorRef.detectChanges();
        console.log(this.dataJson);
    };
    RealMapPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('coordinates:changed');
        this.changeDetectorRef.detach();
    };
    RealMapPage.prototype.drawPath = function () {
        // draw a line path from A to B.
        var pointA = this.minorb;
        var beaconsPoints = this.graph.findShortestPath(pointA, this.pointB.tag);
        this.pathPoints = "";
        var i;
        for (i = 0; i < beaconsPoints.length; i++) {
            var b = beaconsPoints[i];
            var y = this.points[b]['y'];
            var x = this.points[b]['x'];
            var p = x + ',' + y + ' ';
            this.pathPoints += p;
        }
        this.pathVisibility = 'visible';
    };
    RealMapPage.prototype.showBeacons = function () {
        if (this.beaconsVisibility == 'visible') {
            this.beaconsVisibility = 'hidden';
            this.showBeaconsBtnTxt = "eye-off";
        }
        else {
            this.beaconsVisibility = 'visible';
            this.showBeaconsBtnTxt = "eye";
        }
        this.beaconAllPoints = "";
        var points = this.dataJson.beacons;
        console.log(points);
        for (var i in points) {
            var b = points[i];
            this.beaconAllPoints += b['x'] + ',' + b['y'] + ' ';
        }
    };
    RealMapPage.prototype.fetchData = function () {
        var _this = this;
        this.restProvider.fetchData()
            .then(function (data) {
            _this.dataJson = data;
            console.log(data);
        });
    };
    RealMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-real-map',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/real-map/real-map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Plan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="position:relative;">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <!-- <ion-item>\n      <ion-label class="">Path to :</ion-label>\n      <ion-select [(ngModel)]="pointB.tag" (ionChange)="drawPath()" required>\n        <ion-option *ngFor="let destPoint of destPoints" [value]="destPoint.tag">{{ destPoint.name }}</ion-option>\n      </ion-select>\n    </ion-item> -->\n    <ion-fab right top>\n        <button ion-fab class="btn-beacon" (click)="showBeacons()">\n          <ion-icon name=\'eye-off\' [name]=\'showBeaconsBtnTxt\'></ion-icon>\n        </button>\n    </ion-fab>\n    <ion-fab right top style="top: 75px;">\n        <button ion-fab class="btn-path" (click)="clearPath()">\n          <ion-icon name=\'refresh\'></ion-icon>\n        </button>\n    </ion-fab>\n    <div id="mapFloor">\n        <img class="img" [src]="image" style="width: 380px;" #imageCanvas>\n        \n        <svg id="canvas" height="380" [attr.height]="imageHeight" width="380">\n          <defs>\n            <marker id="arrow" markerWidth="10" markerHeight="10" refx="0" refy="2" orient="auto" markerUnits="strokeWidth">\n              <path d="M0,0 L0,4 L6,2 z" fill="#00f" />\n            </marker>\n            <marker id="CircleMark" markerWidth="12" markerHeight="12" refX="4" refY="4" markerUnits="userSpaceOnUse">\n              <circle cx="4" cy="4" r="4" fill="#f0932b"/>\n            </marker>\n          </defs>\n             \n          <circle [attr.cx]="x" [attr.cy]="y" r="8" stroke="#eb4d4b" stroke-width="2" fill="#ff7979">\n          <animate\n                attributeType="XML"\n                attributeName="fill"\n                values="#ff7979;#ff7979;#ff7979;#ff7979"\n                dur="1.0s"\n                repeatCount="indefinite"/>\n          </circle>\n          <circle [attr.cx]="x" [attr.cy]="y" r="12" stroke-width="2" fill="#eb4d4b" fill-opacity="0.6">\n            <animate  attributeName="r" attributeType ="XML"  values = "1;15;1" begin ="0s" dur="2s"  repeatCount="indefinite"/>\n          </circle>\n          <polyline [attr.visibility]="pathVisibility" [attr.points]="pathPoints" stroke-dasharray="5,5" style="fill:none;stroke:#ff7979;stroke-width:3" marker-end="url(#arrow)"  /> \n          <polyline [attr.visibility]="beaconsVisibility" [attr.points]="beaconAllPoints" fill="none" stroke="none" stroke-width="2" marker-start="url(#CircleMark)" marker-mid="url(#CircleMark)" marker-end="url(#CircleMark)"  />\n        </svg>\n\n    </div>  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/real-map/real-map.html"*/,
            styles: ['real-map.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_settings__["a" /* Settings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_settings__["a" /* Settings */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_beacon_detector__["a" /* BeaconDetector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_beacon_detector__["a" /* BeaconDetector */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_rest__["a" /* Rest */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_rest__["a" /* Rest */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]) === "function" && _h || Object])
    ], RealMapPage);
    return RealMapPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=real-map.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChangeEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeEventPage = (function () {
    function ChangeEventPage(alerCtrl, navCtrl, navParams, http, storage) {
        var _this = this;
        this.alerCtrl = alerCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.posts = null;
        this.url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";
        this.storage.get('url').then(function (val) {
            if (val != null) {
                _this.url = val;
            }
        });
        this.http.get('https://s3.eu-west-3.amazonaws.com/pldsmart/listeEvent.json').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data;
        });
    }
    ChangeEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeEventPage');
    };
    ChangeEventPage.prototype.doConfirm = function (id) {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Choose this event ?',
            message: 'Do you really change to this event ? You will loose your favorites',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.storage.set('url', _this.posts.Event[id].url);
                        console.log(_this.posts.Event[id].url);
                        console.log(_this.storage.get('url'));
                        _this.storage.get('url').then(function (val) {
                            console.log("val :", val);
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__accueil_accueil__["a" /* AccueilPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    ChangeEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-event',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/change-event/change-event.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Change Event</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="posts">\n\n    <ion-item *ngFor="let item of posts.Event; let i=index">\n      <ion-thumbnail item-start>\n        <img [src]="item.image">\n      </ion-thumbnail>\n      <h2>{{item.nom}}</h2>\n      <p>{{item.date}}</p>\n      <button ion-button color="primary" block (click)="doConfirm(i)">Change</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/change-event/change-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ChangeEventPage);
    return ChangeEventPage;
}());

//# sourceMappingURL=change-event.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, settings, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.storage = storage;
        this.events = events;
        this.isToggled = false;
    }
    SettingsPage.prototype.ionViewDidLeave = function () {
        return this.settings.save();
    };
    SettingsPage.prototype.updateMode = function () {
        if (this.isToggled) {
            this.settings.trilateration = 2;
        }
        else {
            this.settings.trilateration = 1;
        }
        this.events.publish('navigation:changed', this.settings.trilateration);
        this.storage.set("trilateration", this.settings.trilateration);
    };
    SettingsPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('trilateration').then(function (val) {
            _this.settings.trilateration = val === null ? _this.settings.defaultTrilateration : val;
            if (_this.settings.trilateration == 2) {
                _this.isToggled = true;
            }
            else {
                _this.isToggled = false;
            }
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Paramètres</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Distance de notification (m)\n      <ion-badge item-right>{{settings.accuracyThreshold}}</ion-badge>\n    </ion-list-header>\n    <ion-item>\n      <ion-range min="0" max="80" [(ngModel)]="4*settings.accuracyThreshold" (ngModelChange)="settings.accuracyThreshold=$event/4">>\n        <ion-label range-left>OFF</ion-label>\n        <ion-label range-right>20.0</ion-label>\n      </ion-range>\n    </ion-item>    \n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Mode de navigation\n    </ion-list-header>\n    <ion-item>\n      <ion-label>Trilateration</ion-label>\n      <ion-toggle [(ngModel)]="isToggled" (ionChange)="updateMode()"></ion-toggle>\n    </ion-item>   \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_settings__["a" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.userData.setUsername(data.username);
                _this.getUsername();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center *ngIf="username">\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n    <h2>{{username}}</h2>\n\n    <ion-list inset>\n      <button ion-item (click)="updatePicture()">Update Picture</button>\n      <button ion-item (click)="changeUsername()">Change Username</button>\n      <button ion-item (click)="changePassword()">Change Password</button>\n      <button ion-item (click)="support()">Support</button>\n      <button ion-item (click)="logout()">Logout</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic logo">\n	</div>\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Username</ion-label>\n				<ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Username is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Signup</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(confData, navParams, viewCtrl) {
        var _this = this;
        this.confData = confData;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = this.navParams.data;
        this.confData.getTracks().subscribe(function (trackNames) {
            trackNames.forEach(function (trackName) {
                _this.tracks.push({
                    name: trackName,
                    isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                });
            });
        });
    }
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    ScheduleFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/schedule-filter/schedule-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cancel</button>\n    </ion-buttons>\n\n    <ion-title>\n      Filter Sessions\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>Tracks</ion-list-header>\n\n    <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n      <span item-start class="dot"></span>\n      <ion-label>{{track.name}}</ion-label>\n      <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Reset All Filters\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/schedule-filter/schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data && data.speakers) {
                for (var _i = 0, _a = data.speakers; _i < _a.length; _i++) {
                    var speaker = _a[_i];
                    if (speaker && speaker.id === _this.navParams.data.speakerId) {
                        _this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    };
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
    };
    SpeakerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-detail',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/speaker-detail/speaker-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{speaker?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="speaker-detail">\n  <div text-center *ngIf="speaker">\n    <img [src]="speaker.profilePic" [alt]="speaker.name"><br>\n\n    <button ion-button icon-only clear small color="twitter">\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="github">\n      <ion-icon name="logo-github"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="instagram">\n      <ion-icon name="logo-instagram"></ion-icon>\n    </button>\n  </div>\n\n  <p>{{speaker?.about}}</p>\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/speaker-detail/speaker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SpeakerDetailPage);
    return SpeakerDetailPage;
}());

//# sourceMappingURL=speaker-detail.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Welcome to <b>ICA</b>\n      </h2>\n      <p>\n        The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n      <h2 class="slide-title" >What is Ionic?</h2>\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n      <h2 class="slide-title">What is Ionic Pro?</h2>\n      <p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Support</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Support message is required\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">Submit</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_popover_about_popover__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_accueil_accueil__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_localisation_localisation__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_activities_activities__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_activities_detail_activities_detail__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_real_map_real_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_change_event_change_event__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_account__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_map_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_schedule_schedule__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_schedule_filter_schedule_filter__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_session_detail_session_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_signup_signup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_speaker_detail_speaker_detail__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_speaker_list_speaker_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tabs_page_tabs_page__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tutorial_tutorial__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_support_support__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_conference_data__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_user_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_rest__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_beacon_detector__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_location_manager__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_event_modal_event_modal__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_localisation_localisation__["a" /* LocalisationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_activities_detail_activities_detail__["a" /* ActivitiesDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_real_map_real_map__["a" /* RealMapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_change_event_change_event__["a" /* ChangeEventPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_event_modal_event_modal__["a" /* EventModalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_support_support__["a" /* SupportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_26__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'schedule' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_session_detail_session_detail__["a" /* SessionDetailPage */], name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], name: 'ScheduleFilter', segment: 'scheduleFilter' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], name: 'SpeakerList', segment: 'speakerList' },
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_map_map__["a" /* MapPage */], name: 'Map', segment: 'map' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_accueil_accueil__["a" /* AccueilPage */], name: 'Accueil', segment: 'accueil' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_localisation_localisation__["a" /* LocalisationPage */], name: 'Localisation', segment: 'localisation' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_activities_activities__["a" /* ActivitiesPage */], name: 'Activities', segment: 'activities' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_activities_detail_activities_detail__["a" /* ActivitiesDetailPage */], name: 'ActivitiesDetail', segment: 'activitiesDetail' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_real_map_real_map__["a" /* RealMapPage */], name: 'RealMap', segment: 'realMap' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_change_event_change_event__["a" /* ChangeEventPage */], name: 'ChangeEvent', segment: 'changeEvent' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */], name: 'Settings', segment: 'settings' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_27__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_28__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_event_modal_event_modal__["a" /* EventModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_localisation_localisation__["a" /* LocalisationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_activities_detail_activities_detail__["a" /* ActivitiesDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_real_map_real_map__["a" /* RealMapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_change_event_change_event__["a" /* ChangeEventPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_support_support__["a" /* SupportPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_conference_data__["a" /* ConferenceData */],
                __WEBPACK_IMPORTED_MODULE_31__providers_settings__["a" /* Settings */],
                __WEBPACK_IMPORTED_MODULE_32__providers_rest__["a" /* Rest */],
                __WEBPACK_IMPORTED_MODULE_30__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_33__providers_beacon_detector__["a" /* BeaconDetector */],
                __WEBPACK_IMPORTED_MODULE_34__providers_location_manager__["a" /* LocationManager */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_accueil_accueil__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_localisation_localisation__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_activities_activities__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_real_map_real_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_change_event_change_event__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_account__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_page_tabs_page__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tutorial_tutorial__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_schedule_schedule__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_speaker_list_speaker_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_support_support__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_conference_data__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_user_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_beacon_detector__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen, http, settings, beaconDetector) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.http = http;
        this.settings = settings;
        this.beaconDetector = beaconDetector;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Schedule', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_17__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_19__pages_schedule_schedule__["a" /* SchedulePage */], index: 0, icon: 'calendar' },
            { title: 'Speakers', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_17__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_20__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], index: 1, icon: 'contacts' },
            { title: 'Map', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_17__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */], index: 2, icon: 'map' },
            { title: 'About', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_17__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */], index: 3, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_21__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Logout', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_17__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Accueil', name: 'AccueilPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_accueil_accueil__["a" /* AccueilPage */], icon: 'help' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_21__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        this.posts = null;
        this.url = "https://s3.eu-west-3.amazonaws.com/pld-smart/rif.json";
        // Check if the user has already seen the tutorial
        /* this.storage.get('hasSeenTutorial')
           .then((hasSeenTutorial) => {
             if (hasSeenTutorial) {
               this.rootPage = TabsPage;
             } else {
               this.rootPage = TutorialPage;
             }
             this.platformReady()
           }); */
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_accueil_accueil__["a" /* AccueilPage */];
        // load the conference data
        confData.load();
        platform.ready().then(function () {
            settings.load().then(function () {
                beaconDetector.start('FA95A705-0471-CA87-844D-E33433AD6361');
            });
        });
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.storage.get('url').then(function (val) {
            if (val != null) {
                _this.url = val;
            }
            _this.http.get(_this.url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.posts = data;
                console.log(_this.posts);
                console.log(_this.posts.title);
            });
        });
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
    };
    ConferenceApp.prototype.openAccueil = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_accueil_accueil__["a" /* AccueilPage */]);
    };
    ConferenceApp.prototype.openLocalisation = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_localisation_localisation__["a" /* LocalisationPage */]);
    };
    ConferenceApp.prototype.openActivities = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_activities_activities__["a" /* ActivitiesPage */]);
    };
    ConferenceApp.prototype.openRealMap = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_real_map_real_map__["a" /* RealMapPage */]);
    };
    ConferenceApp.prototype.openChangeEvent = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_change_event_change_event__["a" /* ChangeEventPage */]);
    };
    ConferenceApp.prototype.openSettings = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */]);
    };
    ConferenceApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]) === "function" && _a || Object)
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/app/app.template.html"*/'<ion-split-pane>\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title><img src="assets/img/logo.png" height="40"/></ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n     <!-- <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list> -->\n\n     <ion-list no-lines>\n        <ion-list-header class="event-title" *ngIf=posts>\n          {{posts.title}}\n        </ion-list-header>\n        <button ion-item menuClose (click)="openAccueil()">\n          <ion-icon class="menu-icon" onclick="this.style.color=\'#e02e34\'" item-start name="md-home"></ion-icon>\n          Accueil\n        </button>\n        <button ion-item menuClose (click)="openLocalisation()">\n          <ion-icon class="menu-icon" item-start name="md-navigate"></ion-icon>\n          Activités à proximité\n        </button>\n        <button ion-item menuClose (click)="openActivities()">\n          <ion-icon class="menu-icon" item-start name="md-list-box"></ion-icon>\n          Liste des Activités\n        </button>\n        <button ion-item menuClose (click)="openRealMap()">\n          <ion-icon class="menu-icon" item-start name="md-map"></ion-icon>\n          Plan\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Autres événements\n        </ion-list-header>\n        <button ion-item menuClose (click)="openChangeEvent()">\n          <ion-icon class="menu-icon" item-start name="swap"></ion-icon>\n          Changer d\'événement\n        </button>\n      </ion-list>\n\n    <ion-list>\n        <ion-list-header>\n          Paramètres\n        </ion-list-header>\n        <button ion-item menuClose (click)="openSettings()">\n          <ion-icon class="menu-icon" item-start name="construct"></ion-icon>\n          Paramètres\n        </button>\n      </ion-list>\n\n      <!--<ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Show Tutorial\n        </button>\n      </ion-list>-->\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title><img src="./assets/img/logo.png"/></ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Show Tutorial\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_23__providers_user_data__["a" /* UserData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_23__providers_user_data__["a" /* UserData */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_22__providers_conference_data__["a" /* ConferenceData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_22__providers_conference_data__["a" /* ConferenceData */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_24__providers_settings__["a" /* Settings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_24__providers_settings__["a" /* Settings */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_25__providers_beacon_detector__["a" /* BeaconDetector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_25__providers_beacon_detector__["a" /* BeaconDetector */]) === "function" && _l || Object])
    ], ConferenceApp);
    return ConferenceApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Settings = (function () {
    function Settings(storage) {
        this.storage = storage;
        this.defaultAccuracyThreshold = 5;
        this.defaultTrilateration = 1;
    }
    Settings.prototype.save = function () {
        return this.storage.set("accuracyThreshold", this.accuracyThreshold);
    };
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get("accuracyThreshold")
            .then(function (x) { _this.accuracyThreshold = x === null ? _this.defaultAccuracyThreshold : x; });
    };
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__["a" /* SchedulePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/tabs-page/tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n  <ion-tab [root]="tab1Root" tabTitle="Schedule" tabIcon="calendar" tabUrlPath="conference-schedule"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Speakers" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Map" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/dndesign/Websites/evento_frontend/PLD_SMART_App/src/pages/tabs-page/tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Rest = (function () {
    function Rest(http) {
        this.http = http;
        this.apiUrl = "https://s3.eu-west-3.amazonaws.com/pld-smart/event.json";
        this.apiUrlEvent = "https://s3.eu-west-3.amazonaws.com/pld-smart/rif.json";
    }
    Rest.prototype.fetchData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                console.log(err);
            });
        });
    };
    Rest.prototype.fetchEvent = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrlEvent).subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                console.log(err);
            });
        });
    };
    Rest = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Rest);
    return Rest;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconDetector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_manager__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rest__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_event_modal_event_modal__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BeaconDetector = (function () {
    function BeaconDetector(locationManager, restProvider, http, modalCtrl, events, sets, storage) {
        var _this = this;
        this.locationManager = locationManager;
        this.restProvider = restProvider;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.sets = sets;
        this.storage = storage;
        this.beacons = {};
        this.beaconStatusChangedHandlers = [];
        this.allRssiHistory = {};
        this.rssiHistory = {};
        this.dominatHistory = [];
        this.minorb = 0;
        this.settings = { notifications: true };
        this.firstVisit = {};
        this.points = {};
        this.dataBeacon = {};
        this.historyCount = 5;
        this.didRangeBeaconsInRegionHandler = function (result) {
            var minor;
            var rssi;
            var tx;
            var distance;
            var dominantBeacon;
            var beaconSignals = [];
            var rssiValues = {};
            for (var _i = 0, _a = result.beacons; _i < _a.length; _i++) {
                var beacon = _a[_i];
                beacon.accuracy = _this.calculateAccuracy(beacon.rssi, beacon.tx);
                beacon.key = beacon.uuid + '.' + beacon.major + '.' + beacon.minor;
                beacon.timestamp = (new Date()).getTime();
                minor = beacon.minor;
                rssi = beacon.rssi;
                tx = beacon.tx;
                distance = _this.calculateAccuracy(beacon.rssi, beacon.tx);
                // distance = beacon.accuracy;
                var avgRssi = rssi;
                _this.addRssiHistory(_this.allRssiHistory, minor, rssi);
                if (rssi != 0)
                    _this.addRssiHistory(_this.rssiHistory, minor, rssi);
                if (rssi == 0 && !_this.areAllRssiZero(minor))
                    avgRssi = _this.getAvgRssi(minor);
                beaconSignals.push({ "minor": minor, "rssi": avgRssi, "origRssi": rssi, "tx": tx, "dist": distance });
                // console.log(beaconSignals);
                rssiValues[minor] = avgRssi;
                _this.beacons[beacon.key] = beacon;
            }
            beaconSignals.sort(function (a, b) {
                if (a.rssi == 0 || b.rssi == 0)
                    return a.rssi - b.rssi;
                else
                    return b.rssi - a.rssi; // Descending order
            });
            if (beaconSignals.length > 0) {
                dominantBeacon = beaconSignals[0]['minor'];
                if (_this.dominatHistory.length < 3)
                    _this.dominatHistory.splice(0, 0, dominantBeacon);
                else {
                    _this.dominatHistory.splice(-1, 1); // remove the old item
                    _this.dominatHistory.splice(0, 0, dominantBeacon); // insert as the first item
                }
            }
            if (typeof _this.getMajority(_this.dominatHistory) !== "undefined")
                dominantBeacon = _this.getMajority(_this.dominatHistory);
            _this.minorb = dominantBeacon;
            if (_this.settings.notifications && dominantBeacon != null) {
                // check the beacon has not been visited and its rssi is big enough.
                if (_this.firstVisit[dominantBeacon] == 1 && rssiValues[dominantBeacon] > -75 && rssiValues[dominantBeacon] < 0) {
                    _this.listFavorites.forEach(function (favorite) {
                        if (favorite == dominantBeacon) {
                            _this.firstVisit[dominantBeacon] = 0;
                            _this.getBeaconMessage(dominantBeacon);
                        }
                    });
                }
            }
            _this.events.subscribe('navigation:changed', function (new_mode) {
                _this.positioningMode = new_mode;
            });
            if (_this.positioningMode == 1 && dominantBeacon != null) {
                _this.minorb = dominantBeacon;
                _this.x = _this.points[dominantBeacon]['x'];
                _this.y = _this.points[dominantBeacon]['y'];
            }
            else if (beaconSignals.length > 2) {
                var m1 = beaconSignals[0]['minor'];
                var m2 = beaconSignals[1]['minor'];
                var m3 = beaconSignals[2]['minor'];
                _this.minorb = m1;
                var x1 = _this.points[m1]['x'];
                var y1 = _this.points[m1]['y'];
                var x2 = _this.points[m2]['x'];
                var y2 = _this.points[m2]['y'];
                var x3 = _this.points[m3]['x'];
                var y3 = _this.points[m3]['y'];
                var d1 = _this.calculateAccuracy(beaconSignals[0]['rssi'], beaconSignals[0]['tx']);
                // let d1 = this.getDistance(beaconSignals[0]['rssi']);
                var d2 = _this.calculateAccuracy(beaconSignals[1]['rssi'], beaconSignals[1]['tx']);
                // let d2 = this.getDistance(beaconSignals[1]['rssi']);
                var d3 = _this.calculateAccuracy(beaconSignals[2]['rssi'], beaconSignals[2]['tx']);
                // let d3 = this.getDistance(beaconSignals[2]['rssi']);
                if (d1 > 0 && d2 > 0 && d3 > 0) {
                    var A = (x1 * x1) + (y1 * y1) - (d1 * d1);
                    var B = (x2 * x2) + (y2 * y2) - (d2 * d2);
                    var C = (x3 * x3) + (y3 * y3) - (d3 * d3);
                    var X32 = x3 - x2;
                    var X13 = x1 - x3;
                    var X21 = x2 - x1;
                    var Y32 = y3 - y2;
                    var Y13 = y1 - y3;
                    var Y21 = y2 - y1;
                    // based on the formula from http://cdn.intechweb.org/pdfs/13525.pdf
                    var x = ((A * Y32) + (B * Y13) + (C * Y21)) / (2 * ((x1 * Y32) + (x2 * Y13) + (x3 * Y21)));
                    var y = ((A * X32) + (B * X13) + (C * X21)) / (2 * ((y1 * X32) + (y2 * X13) + (y3 * X21)));
                    x = Math.round(x);
                    y = Math.round(y);
                    if (x == -Infinity || isNaN(x) || y == -Infinity || isNaN(y)) {
                        _this.x = _this.points[dominantBeacon]['x'];
                        _this.y = _this.points[dominantBeacon]['y'];
                    }
                    else {
                        _this.x = x;
                        _this.y = y;
                    }
                    console.log("x : " + x);
                    console.log("y : " + y);
                }
            }
            else if (beaconSignals.length > 0) {
                _this.x = _this.points[dominantBeacon]['x'];
                _this.y = _this.points[dominantBeacon]['y'];
            }
            _this.events.publish('coordinates:changed', _this.x, _this.y);
            _this.notifyBeaconStatusChanged();
        };
        this.fetchData();
        this.fetchEvent();
        this.getFavorites();
        this.checkPositioningMode();
    }
    BeaconDetector.prototype.getFavorites = function () {
        var _this = this;
        this.listFavorites = [];
        this.storage.get('favorites').then(function (favorites) {
            _this.dataEvent.activitesBalise.forEach(function (event) {
                favorites.forEach(function (favorite) {
                    if (favorite == event.id) {
                        _this.listFavorites.push(event.minor);
                    }
                });
            });
        });
    };
    BeaconDetector.prototype.getBeaconMessage = function (minorVal) {
        // console.log(minorVal);
        for (var i = 0, l = Object.keys(this.dataJson.notifications).length; i < l; i++) {
            this.dataBeacon[this.dataJson.notifications[i].minor] = this.dataJson.notifications[i];
        }
        // console.log(this.dataBeacon[minorVal]);       
        this.handleBeaconMsg(this.dataBeacon[minorVal]);
    };
    BeaconDetector.prototype.handleBeaconMsg = function (response) {
        if (response) {
            var msgList = [];
            if (response['enabled'] == 1) {
                if (response['template'] == 'text') {
                    if (response['type'] == 'URL') {
                        this.showConfirm(response['message'], response['url']);
                    }
                    else
                        msgList.push(response);
                }
                else if (response['template'] == 'form') {
                    //add if there is some specification
                    msgList.push(response);
                }
                else if (response['template'] == 'event') {
                    var date = response['date'];
                    var now = this.getDate();
                    if (now <= date) {
                        var msg = 'There will be at this place on ' + date;
                        msgList.push(msg);
                    }
                }
                else {
                    msgList.push(response);
                }
            }
            // console.log(msgList);
            if (msgList.length > 0)
                this.showAlerts(msgList);
        }
    };
    BeaconDetector.prototype.getDate = function () {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        var seconds = currentTime.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        var month = currentTime.getMonth() + 1;
        if (month < 10)
            month = '0' + month;
        var day = currentTime.getDate();
        if (day < 10)
            day = '0' + day;
        var year = currentTime.getFullYear();
        var t1 = hours + ":" + minutes + ":" + seconds;
        var d = year + "-" + month + "-" + day;
        var dateTime = d + " " + t1;
        return dateTime;
    };
    BeaconDetector.prototype.showConfirm = function (msg, url) {
        // console.log("opening modal");
        var obj = { msg: msg, url: url };
        var eventModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__pages_event_modal_event_modal__["a" /* EventModalPage */], obj);
        eventModal.onDidDismiss(function (data) {
            //this.userName = data.email;
            console.log(data);
        });
        eventModal.present();
    };
    BeaconDetector.prototype.showAlerts = function (eventData) {
        var data = { header: eventData[0].header, title: eventData[0].title, image: eventData[0].image, message: eventData[0].message, btn_txt: eventData[0].btn_txt, url: eventData[0].url, template: eventData[0].template };
        var eventModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__pages_event_modal_event_modal__["a" /* EventModalPage */], data);
        eventModal.present();
    };
    BeaconDetector.prototype.getMajority = function (items) {
        if (items[0] == items[1] || items[0] == items[2])
            return items[0];
        else if (items[1] == items[2])
            return items[1];
        else
            return items[0];
    };
    BeaconDetector.prototype.areAllRssiZero = function (beaconKey) {
        var hist = this.allRssiHistory[beaconKey];
        var allZero = true;
        if (hist) {
            for (var i = 0; i < hist.length; i++) {
                if (hist[i] != 0) {
                    allZero = false;
                    break;
                }
            }
        }
        return allZero;
    };
    BeaconDetector.prototype.getAvgRssi = function (beaconKey) {
        var sum = 0;
        var hist = this.rssiHistory[beaconKey];
        if (hist) {
            for (var i = 0; i < hist.length; i++)
                sum = sum + hist[i];
            if (hist.length != 0)
                return Math.round(sum / hist.length);
            else
                return 0;
        }
        else
            return 0;
    };
    BeaconDetector.prototype.addRssiHistory = function (table, beaconKey, rssi) {
        var hist = table[beaconKey];
        if (!hist) {
            hist = [];
            hist.push(rssi);
        }
        else {
            if (hist.length < this.historyCount) {
                hist.splice(0, 0, rssi);
            }
            else {
                hist.splice(-1, 1); // remove the old item
                hist.splice(0, 0, rssi); // insert as the first item
            }
        }
        table[beaconKey] = hist;
    };
    BeaconDetector.prototype.notifyBeaconStatusChanged = function () {
        for (var _i = 0, _a = this.beaconStatusChangedHandlers; _i < _a.length; _i++) {
            var beaconStatusChangedHandler = _a[_i];
            beaconStatusChangedHandler(this.beacons);
        }
    };
    BeaconDetector.prototype.calculateAccuracy = function (rssi, tx) {
        var ratio = rssi / tx;
        var accuracy;
        if (ratio < 1.0) {
            accuracy = Math.pow(ratio, 10);
        }
        else {
            accuracy = 0.89976 * Math.pow(ratio, 7.7095) + 0.111;
        }
        if (accuracy < 1) {
            accuracy = Math.round(accuracy * 100) / 100;
        }
        else if (accuracy < 10) {
            accuracy = Math.round(accuracy * 10) / 10;
        }
        else {
            accuracy = Math.round(accuracy);
        }
        return accuracy;
    };
    BeaconDetector.prototype.addBeaconStatusChangedHandler = function (beaconStatusChangedHandler) {
        this.beaconStatusChangedHandlers.push(beaconStatusChangedHandler);
    };
    ;
    BeaconDetector.prototype.getBeacons = function () {
        return this.beacons;
    };
    ;
    BeaconDetector.prototype.start = function (uuid) {
        this.locationManager.start(uuid, this.didRangeBeaconsInRegionHandler);
    };
    ;
    BeaconDetector.prototype.fetchData = function () {
        var _this = this;
        this.restProvider.fetchData()
            .then(function (data) {
            _this.dataJson = data;
            for (var i = 0, l = Object.keys(_this.dataJson.beacons).length; i < l; i++) {
                _this.points[_this.dataJson.beacons[i].minor] = _this.dataJson.beacons[i];
                _this.firstVisit[_this.dataJson.beacons[i].minor] = 1;
            }
            console.log(data);
        });
    };
    BeaconDetector.prototype.fetchEvent = function () {
        var _this = this;
        this.restProvider.fetchEvent()
            .then(function (data) {
            _this.dataEvent = data;
        });
    };
    BeaconDetector.prototype.checkPositioningMode = function () {
        var _this = this;
        if (typeof this.positioningMode !== "undefined") {
            this.positioningMode = this.sets.trilateration;
        }
        else {
            this.storage.get('trilateration').then(function (val) {
                _this.sets.trilateration = val === null ? _this.sets.defaultTrilateration : val;
                _this.positioningMode = _this.sets.trilateration;
            });
        }
    };
    BeaconDetector = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__location_manager__["a" /* LocationManager */],
            __WEBPACK_IMPORTED_MODULE_6__rest__["a" /* Rest */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], BeaconDetector);
    return BeaconDetector;
}());

//# sourceMappingURL=beacon-detector.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map