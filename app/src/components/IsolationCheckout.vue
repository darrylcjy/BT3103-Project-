<template>
    <div id = "heading">
        <h1>Hello {{this.name}}, </h1>
        <h1>The symptoms that you present <u>do not</u> require medical attention.</h1>
    </div>
    
    <!-- PROTOCOL --> 
    <h2>Please follow the following steps for the next few days.</h2>

    <div id="first-days">
        <h2>Day 1 - Day 3</h2> 
        <li>Do not leave your house.</li>
        <li>Stop going to school or office. Cancel all your social activities.</li>
        <li>Self isolate from your household members in a separate room.</li>
    </div> <br>

    <div id="second-days">
        <h2>Day 4 - Day {{this.middleDay}}</h2>
        Administer an ART test. <br>

        <div class="state">
            If your ART result is negative, <br>
            <img src="@/assets/negative.png" alt="Negative FET not found"><br><br>
            Congratulations! <br>
            You can resume your daily activities.
        </div>

        <div class="state">
            If your ART result is positive, <br>
            <img src="@/assets/positive.png" alt="Positive FET not found"> <br><br>
            Continue to self isolate till your next ART result is negative.
              <!-- include pic of positive and negative -->
        </div>
    </div> <br>

    <div id="third-days">
        <h2> Day {{this.lastDay}} </h2>
        <!-- based on user's personal info, we can show either 7 days or 14 days -->
        <!-- 7 days for fully vaccinated + children below 12 -->
        <!-- 14 days for partially vaccinated/ unvaccinated individuals above 12 -->
        Congratulations! You may resume your daily activities.  <br>
        If possible, please minimize your social activities for the next {{this.day}} days.
    </div>
    <br><br><br>

    <h1>When should I seek medical attention?</h1>
    
    <!-- WARNING --> 
    <div class="warning">
        <h2 style="text-align:center"> Contact 995 immediately</h2>
        If you are experiecing any of the following symptoms:
        <li>Chest pain</li>
        <li>Shortness of breath</li>
        <li>Weakness over one side of the body</li>
        <li>Oximeter SpO2 reading below 92%</li> <br>
    </div>

    <div class="warning">
        <h2 style="text-align:center">Visit the nearest medical clinic</h2>
        If you are experiencing any of the following symptoms: 
        <li>Prolonged fever >= 3 days</li>
        <li>Persistent diarrhea and vomiting</li>
        <li>Headaches</li>
        <li>Sudden/Worsening leg pain and swelling</li>
        <li>Oximeter SpO2 reading is consistently 93% - 94%</li>
    </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
const db = getFirestore(firebaseApp);

export default {
    data() {
        return {
            name: "",
            lastDay: 0,
            middleDay: 0,
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.display(user)
                this.getMaxDays(user)
            }
        })
    },
    methods: {
        async display(user) {
            let x = await getDoc(doc(db, "details", String(user.email)));
            
            this.name = x.data().name; 
        },

        // assumption: 2 shots and 2 shots + 1 booster considered fully vaccinated
            // 7 days - fully vaccinated individuals + children below 12
            // 14 days - partialy/unvaccinated individuals above 12 
        async getMaxDays(user) {   
            let x = await getDoc(doc(db, "details", String(user.email)));
            let maxDays = 0;
            
            const age = x.data().age;
            const vaccinationStatus = x.data().vax;

            // console.log(age)

            if (age > 12) {     // for individuals 12 and above
                // console.log("12 years and above")
                if (vaccinationStatus == "Received booster shot" || vaccinationStatus == "Completed full regimen (2 dose)") {   // for fully vaccinated
                    maxDays = 7;
                } else {    // for not fully vaccinated
                    maxDays = 14;
                }
            } else {    // for chilldren below 12 years
                // console.log("12 years and below")
                maxDays = 7;
            }
            this.lastDay = maxDays
            this.middleDay = maxDays - 1
        },

    }
}
</script>

<style>
    #first-days, #second-days, #third-days {
        text-align: justify;
        padding: 10px;
        width: 900px;
        height: auto;
        background-color: rgba(183, 218, 250, 1);
        border-radius: 10px;
        font-size: 20px;    /* originally 25*/
        margin: auto;
        box-shadow: 1px 1px 5px black;
        
    }

    #first-days h2, #second-days h2, #third-days h2 {
        text-align: center;
        background-color: #F5F5DD;
        margin: auto;
        border-radius: 10px;
        margin-bottom: 10px;    /* to add space between header and body */
    }

    #second-days, #third-days {
        text-align: center;
    }

    .state {
        background-color: #F5F5DD;
        /* border: 1px solid black; */
        border-radius: 10px;
        display: inline-block;
        padding: 10px; 
        margin: 25px;
        text-align: center;
        width: 40%;
    }

    .warning {
        /* border: 1px solid black; */
        display: inline-block;
        padding: 10px;
        margin: 15px;
        width: 35%;
        text-align: left;
        border-radius: 10px;
        font-size: 20px;
        background-color: rgba(183, 218, 250, 1);
        /* background-color: rgba(183, 218, 250, 0.15); */
        box-shadow: 1px 1px 5px black;
    }

    .warning h2 {
        text-align: center;
        background-color: #F5F5DD;
        padding: 5px;
        margin: auto;
        border-radius: 10px;
        margin-bottom: 10px;   
    }
</style>