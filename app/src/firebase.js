import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNd9_yAmUPbDKqqLBfzwvK_vmNtCPPamc",
  authDomain: "covidcare-9c38b.firebaseapp.com",
  projectId: "covidcare-9c38b",
  storageBucket: "covidcare-9c38b.appspot.com",
  messagingSenderId: "504356556779",
  appId: "1:504356556779:web:f1280de96587bfe38c13ae",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
