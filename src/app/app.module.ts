import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccueilPage } from '../pages/accueil/accueil';
import { LocalisationPage } from '../pages/localisation/localisation';
import { ActivitiesPage } from '../pages/activities/activities';
import { ActivitiesDetailPage} from '../pages/activities-detail/activities-detail';
import { RealMapPage } from '../pages/real-map/real-map';
import { ChangeEventPage } from '../pages/change-event/change-event';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { Settings } from '../providers/settings';
import { Rest } from '../providers/rest';
import { BeaconDetector } from '../providers/beacon-detector';
import { LocationManager } from '../providers/location-manager';

import { EventModalPage } from '../pages/event-modal/event-modal';

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccueilPage,
    LocalisationPage,
    ActivitiesPage,
    ActivitiesDetailPage,
    RealMapPage,
    ChangeEventPage,
    SettingsPage,
    EventModalPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AccueilPage, name: 'Accueil', segment: 'accueil' },
        { component: LocalisationPage, name: 'Localisation', segment: 'localisation' },
        { component: ActivitiesPage, name: 'Activities', segment: 'activities' },
        { component: ActivitiesDetailPage, name: 'ActivitiesDetail', segment: 'activitiesDetail' },
        { component: RealMapPage, name: 'RealMap', segment: 'realMap' },
        { component: ChangeEventPage, name: 'ChangeEvent', segment: 'changeEvent' },
        { component: SettingsPage, name: 'Settings', segment: 'settings' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    EventModalPage,
    AccueilPage,
    LocalisationPage,
    ActivitiesPage,
    ActivitiesDetailPage,
    RealMapPage,
    ChangeEventPage,
    SettingsPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    Settings,
    Rest,
    UserData,
    BeaconDetector,
    LocationManager,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
