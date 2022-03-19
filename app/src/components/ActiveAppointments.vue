<template>
    <div id = "heading">
        <h1>Hello {{name}}, </h1>
        <h2>You have an appointment at the following clinic:</h2>
    </div>
    
    <!-- <h2> Venue: </h2> -->
    <label> Venue </label>
    <div id="venue">
        {{clinicName}} <br>
        {{location}} 
        {{unitno}} 
        {{postalCode}} <br><br>
        Distance: {{dist}} km away
    </div>

    <br><br>

    <!-- <h2> Date:</h2> -->
    <label> Date </label>
    <div id="date">
        {{date}} <br>
        {{day}}
    </div>

    <br><br>

    <!-- <h2> Time: </h2> -->
    <label> Time </label>
    <div id="time">
        {{time}}
    </div>

    <br>
    <p id='text'>Get directions <a v-bind:href="website" target="_blank">here</a></p>
    <button id='cancel' v-on:click="cancelAppt()">Cancel Appointment</button>
    <button id='back' v-on:click="this.$router.push({path: '/user-home'})">Back to Home</button>

</template>

<script>
export default {
    name:'Active Appointments',

    data() {
        return {
            name: "John Doe",

            clinicName: "1 BISHAN MEDICAL",
            location: "283 BISHAN STREET 22",
            unitno: "#01-191",
            postalCode: "SINGAPORE 750283",
            dist: 1.2,

            date: "11 March 2022",
            day: "Friday",

            time: "12:26",

            website: "https://www.google.com/maps/place/1+Bishan+Medical+Clinic/@1.3590939,103.8424033,17z/data=!4m5!3m4!1s0x31da1718a8100001:0xba24b3317af11a87!8m2!3d1.3590885!4d103.8445973"
        }
    },

    methods: {
        cancelAppt() {
            var positive = window.confirm("Would you like to make another appointment?"); 
            if (positive) { // user answers in positive: ie: want to make new appt 
                this.$router.push({ path: '/facil-confirmation' }); 
            } else {
                // clear the active appointments page & replace with "you have no appts!"
                
                // route them back to list of medical facilities (idk)
                this.$router.push({ path: '/med-facils' }); 
            }
        }
    }
}
</script>

<style>
    #venue {
        text-align: center;
        padding: 10px;
        width: 800px;
        height: auto;
        background-color: rgba(183, 218, 250, 1);
        border-radius: 10px;
        font-size: 25px;
        margin: auto;
    }

    #date {
        text-align: center;
        padding: 10px;
        width: 800px;
        height: auto;
        background-color: rgba(183, 218, 250, 1);
        border-radius: 10px;
        font-size: 25px;
        margin: auto;
    }

    #time {
        text-align: center;
        padding: 10px;
        width: 800px;
        height: auto;
        background-color: rgba(183, 218, 250, 1);
        border-radius: 10px;
        font-size: 25px;
        margin: auto;
    }

    #cancel, #back {
        all: unset;
        font-size: 1.5rem;
        background-color: #f5f5dd;
        padding: 10px;
        border-radius: 10px;
        width: 15rem;
        display: inline-block;
        margin: 10px;
        margin-left: 10px; 
    }

    #text {
        display: inline-block;
        /* padding-right: 30px; */
        font-size: 1.5rem;
        padding-right: 100px;
        /* i want to increase the space between text & button */
    }

    #cancel:hover, #back:hover {
        background-color: blanchedalmond;
    }

    label {
        font-size: 24px;
        text-align: left;
    }
</style>