import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDNd9_yAmUPbDKqqLBfzwvK_vmNtCPPamc",
    authDomain: "covidcare-9c38b.firebaseapp.com",
    projectId: "covidcare-9c38b",
    storageBucket: "covidcare-9c38b.appspot.com",
    messagingSenderId: "504356556779",
    appId: "1:504356556779:web:f1280de96587bfe38c13ae",
    measurementId: "G-DFNR2SBFR8"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const analytics = getAnalytics(app);