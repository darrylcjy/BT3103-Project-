<template>
    <div id = "heading">
        <h1>The symptoms that you present do not require medical attention.</h1>
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
        <h2>Day 4 - ~</h2>
        Administer an ART test. <br>

        <div class="state">
            If your ART result is negative, <br>
            <img src="@/assets/negative.png" alt="Negative FET not found"><br><br>
            Congratulations! 
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
        <h2> Day 7 </h2>
        <!-- based on user's personal info, we can show either 7 days or 14 days -->
        <!-- 7 days for fully vaccinated + children below 12 -->
        <!-- 14 days for partially vaccinated/ unvaccinated individuals above 12 -->
        Congratulations! You may resume your daily activities.  <br>
        If possible, please minimize your social activities for the next 7 days.
    </div>
    
    <!-- WARNING --> <br><br>
    <div class="warning">
        <h2 style="text-align:center"> Contact 995</h2>
        If you are experiecing any of the following symptoms:
        <li>Chest pain</li>
        <li>Shortness of breadth</li>
        <li>Sudden weakness on one side</li>
        <li>Oximeter SpO2 reading below 92%</li> <br>
    </div>

    <div class="warning">
        <h2 style="text-align:center">Visit the nearest GP</h2>
        If you are experiencing any of the following symptoms: 
        <li>Prolonged fever >= 3 days</li>
        <li>Persistent diarrhea and vomiting</li>
        <li>Headaches</li>
        <li>Sudden/Worsening leg pain and swelling</li>
        <li>Oximeter SpO2 reading is consistently 93% - 94%</li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "John Doe",
            day: 7
        }
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
        border: 1px solid black;
        display: inline-block;
        padding: 10px; 
        margin: 25px;
        text-align: center;
        width: 40%;
    }

    .warning {
        border: 1px solid black;
        display: inline-block;
        padding: 10px;
        margin: 15px;
        width: 30%;
        text-align: left;
        border-radius: 10px;
    }

</style>