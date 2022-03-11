<template>
    <div id = "heading">
        <h1>Hello {{name}}, </h1>
        <h2>the symptoms that you present do not require medical attention.</h2>
    </div>
    <br>
    <div id="protocol">
        <p>Please follow the following steps for the next few days.</p>
        <table>
            <tr>
                <th class="no">Day</th>
                <th>What should I do?</th>
            </tr>

            <tr>
                <td class="no">1</td>
                <td>
                    For the next 72 hours,
                    <li>Do not leave your house.</li>
                    <li>Stop going to school or for work. Cancel all your social activities.</li>
                    <li>Self isolate from your household members in a separate room.</li>
                </td>
            </tr>

            <tr>
                <td class="no">2</td>
                <td></td>
            </tr>

             <tr>
                <td class="no">3</td>
                <td></td>
            </tr>

             <tr>
                <td class="no">4</td>
                <td>
                    After 72 hours, take an ART test. <br>
                    If your ART result is negative, congratulations!
                    <li>You can resume your daily activities.</li>
                    If your ART result is positive, don't worry!
                    <li>Continue to self isolate till your next ART result is negative.</li>
                </td>
            </tr> 

            <tr>
                <td class="no">~</td>
                <td></td>
            </tr>

            <!-- based on user's personal info, we can show either 7 days or 14 days -->
            <!-- 7 days for fully vaccinated + children below 12 -->
            <!-- 14 days for partially vaccinated/ unvaccinated individuals above 12 -->
            <tr>
                <td class="no">{{day}}</td>
                <td>
                    Congratulations! You may resume your daily activities.
                </td>
            </tr>
        </table>
    </div>
    <br>
    <div id="symptoms">
        <p>If you present any of the following symptoms,</p>
        <ul>
            <li>Prolonged fever</li>
            <li>Worsening cough</li>
            <li>Breathing difficulties</li>
        </ul>
        <p>Do not hesitate to go to your nearest GP to seek medical attention.</p>
        
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
    table {
        border-collapse: collapse;  /*  to join the borders of the table */
        table-layout: fixed;
        /* width: 100%; */
        margin-left: auto;
        margin-right: auto;
    }
    th, td {
        border: 1px solid black;
        text-align: justify;
        overflow: hidden;
    }
    .no{
        text-align: center;
        width:100px;
    }
    #symptoms {
        text-align: center;
        list-style-position: inside;
    }

</style>