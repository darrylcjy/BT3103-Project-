<template>
    <div id = "heading">
        <h1>Hello {{name}}, </h1>
        <h2>You have an appointment at the following clinic:</h2>
    </div>
    <br>
    <h2> Venue: </h2>
    <div id="venue">
        {{clinicName}} <br>
        {{location}} <br>
        {{unitno}} <br>
        {{postalCode}} <br><br>
        Distance: {{dist}} km away
    </div>

    <h2> Date:</h2>
    <div id="date">
        {{date}} <br>
        {{day}}
    </div>

    <h2> Time: </h2>
    <div id="time">
        {{time}}
    </div>

    <br>
    <p>Get directions <a v-bind:href="website" target="_blank">here</a></p>
    <button>Cancel Appointment</button>
</template>

<script>
export default {
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
    }
}
</script>

<style>
    #venue {
        border-style: groove;
        width: 300px;
        height: 150px;
        margin: auto;
        padding-top: 15px;
    }

    #date {
        border-style: groove;
        width: 300px;
        height: 50px;
        margin: auto;
        padding-top: 7px;
    }

    #time {
        border-style: groove;
        width: 300px;
        height: 25px;
        margin: auto;
        padding-top: 5px;
    }
</style>