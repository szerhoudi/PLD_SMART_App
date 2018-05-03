# IFollow Application

This is the official IFollow application, made by H4214.

## Table of Contents
 - [Getting Started](#getting-started)
 - [Overview](#overview)
 - [Deploying](#deploying)
 - [File Structure of App](#file-structure-of-app)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/szerhoudi/PLD_SMART_App.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.

_Note: You may need to add “sudo” in front of any global commands to install the utilities._

## Deploying

* PWA - Un-comment [this](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21), run `npm run ionic:build --prod` and then push the `www` folder to your favorite hosting service
* Android - Run `ionic cordova run android --prod`
  - If you are deploying to Android 4.4 or below we recommend adding crosswalk: `cordova plugin add cordova-plugin-crosswalk-webview`
* iOS - Run `ionic cordova run ios --prod`

## Overview

* Read the `Document de Synthèse IFollow.pdf` document for all the informations.
* Our presentation support is `Présentation IFollow.pdf`.
* Our teaser is available here : https://youtu.be/Ikx-ZIy-mJM

## File Structure of App

Others pages are in the application but its have no use for now.
```
ionic-conference-app/
├-- .github/                             * GitHub files
│   ├── CONTRIBUTING.md                  * Documentation on contributing to this repo
│   └── ISSUE_TEMPLATE.md                * Template used to populate issues in this repo
|
|-- resources/
|
|-- src/
|    |-- app/
|    |    ├── app.component.ts
|    |    └── app.module.ts
|    |    └── app.template.html
|    |    └── main.ts
|    |    └── app.scss
|    |
|    |-- assets/
|    |    ├── data/
|    |    |    └── data.json
|    |    |
|    |    ├── fonts/
|    |    |     └── nunito.woff2
|    |    |
|    |    ├── img/
|    |
|    |-- pages/                           * Contains all of our pages
│    │    ├── accueil/			  * Accueil page
│    │    │    ├── accueil.html           * AccueilPage template
│    │    │    └── accueil.ts             * AccueilPage code
│    │    │    └── accueil.scss           * AccueilPage stylesheet
│    │    │
│    │    ├── activities/                 * Activities page
│    │    │    ├── activities.html        * ActivitiesPage template
│    │    │    └── activities.ts          * ActivitiesPage code
│    │    │    └── activities.scss        * ActivitiesPage stylesheet
│    │    │
│    │    │── activities-detail/          * Activities Detail page
│    │    │    ├── activities-detail.html * ActivitiesDetailPage template
│    │    │    └── activities-detail.ts   * ActivitiesDetailPage code
│    │    │    └── activities-detail.scss * ActivitiesDetailPage stylesheet
│    │    │
│    │    │── change-event/               * Change Event page
│    │    │    ├── change-event.html      * ChangeEventPage template
│    │    │    └── change-event.ts        * ChangeEventPage code
│    │    │    └── change-event.scss      * ChangeEventPage stylesheet
│    │    │
│    │    │── localisation/               * Localisation page
│    │    │    ├── localisation.html      * LocalisationPage template
│    │    │    └── localisation.ts        * LocalisationPage code
│    │    │    └── localisation.scss      * LocalisationPage stylesheet
│    │    │
│    │    │── real-map/            	  * Real Map page
│    │    │    ├── real-map.html   	  * RealMapPage template
│    │    │    └── real-map.ts     	  * RealMapPage code
│    │    │    └── real-map.scss   	  * RealMapPage stylesheet
│    │    │
│    │    └── settings/            	  * Settings page
│    │         ├── settings.html   	  * SettingsPage template
│    │         └── settings.ts     	  * SettingsPage code
│    │         └── settings.scss   	  * SettingsPage stylesheet
│    │    
|    |
│    ├── providers/                       * Contains all Injectables
|    |     ├── beacon-detector.ts	  * Beacon detector code
│    │     ├── conference-data.ts         * ConferenceData code
|    |     ├── location-manager.ts	  * Location Manager code
|    |     ├── rest.ts	 		  * Rest code
|    |     ├── settings.ts		  * Settings code
│    │     └── user-data.ts               * UserData code
│    ├── theme/                           * App theme files
|    |     ├── variables.scss             * App Shared Sass Variables
|    |
|    |-- index.html
|
|-- www/
|    ├── assets/
|    |    ├── data/
|    |    |    └── data.json
|    |    |
|    |    ├── fonts/
|    |    |     ├── ionicons.eot
|    |    |     └── ionicons.svg
|    |    |     └── ionicons.ttf
|    |    |     └── ionicons.woff
|    |    |     └── ionicons.woff2
|    |    |
|    |    ├── img/
|    |
|    └── build/
|    └── index.html
|
├── .editorconfig                        * Defines coding styles between editors
├── .gitignore                           * Example git ignore file
├── LICENSE                              * Apache License
├── README.md                            * This file
├── config.xml                           * Cordova configuration file
├── ionic.config.json                    * Ionic configuration file
├── package.json                         * Defines our JavaScript dependencies
├── tsconfig.json                        * Defines the root files and the compiler options
├── tslint.json                          * Defines the rules for the TypeScript linter
```
