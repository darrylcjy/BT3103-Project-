<template>
    <!-- Form to Login Firebase ui-->
    <div>
        <h1>Welcome to CovidCare</h1>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
    name: "LoginFirebaseUI",
    mounted() {
        var ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth())
        }

        var uiConfig = {
            signInSuccessUrl: '/user-home',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            callbacks: {
                signInSuccessWithAuthResult: function(authResult) {
                //query if its present
                    getDoc(doc(db, "details", String(authResult.user.email))).then((z) => {
                        if (z.exists()) {
                            //if present go to user home page straight
                            window.location.pathname = '/user-home'
                        } else {
                            //not present go to personal details page
                            window.location.pathname = '/personal-details'
                        }
                    })
                    return false
                }   

            }
            
        }

        
        ui.start('#firebaseui-auth-container', uiConfig);
        
    }
}
</script>

<style scoped>
h1 {
    font-size: 2.5rem;
}


</style>