// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAneVDjV1k74lrNE-hcIB8EK5pKarLn56E",
    authDomain: "academic-solution-42c2e.firebaseapp.com",
    databaseURL: "https://academic-solution-42c2e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "academic-solution-42c2e",
    storageBucket: "academic-solution-42c2e.appspot.com",
    messagingSenderId: "407950417084",
    appId: "1:407950417084:web:a4e107e4cc4a74152ac4b9",
    measurementId: "G-Q35CP6DND5"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
