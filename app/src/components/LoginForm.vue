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

export default {
    name: "LoginFirebaseUI",
    mounted() {
        var ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth())
        }

        var uiConfig = {
            signInSuccessUrl: '/personal-details',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
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