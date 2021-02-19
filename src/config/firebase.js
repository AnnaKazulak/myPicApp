import Vue from "vue";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyBU8dty9QE0D8UsGQzRdvts9cIcrRxFCLI",
  authDomain: "mypicapp-fb853.firebaseapp.com",
  projectId: "mypicapp-fb853",
  storageBucket: "mypicapp-fb853.appspot.com",
  messagingSenderId: "979727652348",
  appId: "1:979727652348:web:3eef62f06e0c4076a58e79",
  measurementId: "G-33EWC85P6L",
};
// Initialize Firebase
firebase.initializeApp(config);
const analytics = firebase.analytics();
analytics.logEvent("page_view");

firebase.firestore().settings({});

Vue.prototype.$dbField = firebase.firestore.FieldValue;

Vue.prototype.$db = firebase.firestore();
Vue.prototype.$auth = firebase.auth();
