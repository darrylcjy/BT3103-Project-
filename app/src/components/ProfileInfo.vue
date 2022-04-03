<template>
    <div class="bar">
        <!-- Styling of Profile Page -->
        <input type="radio" name="details" id="details" v-model="selected" value="details">
        <label for="details"><span>1</span> Personal Details</label>
        <input type="radio" name="health" id="health" v-model="selected" value="health">
        <label for="health"><span>2</span> Health Conditions</label>
    </div>
    <div class="info" v-if="selected === 'details'">
        <h1>Profile</h1>
        <p><b>Name:</b> {{this.name}}</p>
        <p><b>Phone Number:</b> {{this.phone}}</p>
        <p><b>Age:</b> {{this.age}}</p>
        <p><b>Address:</b> {{this.address}}</p>
        <p><b>Postal Code:</b> {{this.postal}}</p>
        <p><b>Vaccination Status:</b> {{this.vax}}</p>
        <div class="edit">
            <button class="btn" @click="redirect()">Edit Profile<i class="fas fa-edit"></i></button>
        </div>
    </div>
    <div class="health" v-else>
        <h1>Declared Health Conditions</h1>
        <p><b>Pregnant:</b> {{this.pregnant}}</p>
        <p><b>HIV/AIDS:</b> {{this.hiv}}</p>
        <p><b>Cancer:</b> {{this.cancer}}</p>
        <p><b>Immunocompromised:</b> {{this.immunocompromised}}</p>
        <div class="edit">
            <button class="btn" @click="redeclare()">Redeclare Health Conditions<i class="fas fa-edit"></i></button>
        </div>
    </div>
    <br><br>
</template>

<script>
import firebaseApp from "../firebase.js";
import {getFirestore} from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const db = getFirestore(firebaseApp);

export default {
    data() {
        return {
            // added to suppress warning
            name: "",
            phone: "",
            year: "",
            address: "",
            vax: "",
            postal: "",
            age: "",
            selected: "details",
            pregnant: "",
            hiv: "",
            cancer: "",
            immunocompromised:""
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.display(user)
            }
        })
    },

    methods: {
        async display(user) {
            let z = await getDoc(doc(db, "details", String(user.email)))

            let data = z.data()
            this.name = data.name
            this.phone = data.phone
            this.year = data.year
            this.address = data.address
            this.postal = data.postal
            this.vax = data.vax
            this.pregnant = data.pregnant
            this.hiv = data.hiv
            this.cancer = data.cancer
            this.immunocompromised = data.immunocompromised
        },

        redirect() {
            this.$router.push({name:"Update"})
        },

        redeclare() {
            this.$router.push({name:"Health Dec"})
        }
    },

    watch: {
        year(val) {
            let currentYear = new Date().getFullYear()
            this.age = currentYear - val
        }
    }

}
</script>

<style scoped>
/* Selection for viewing */
.bar {
    max-width: 700px;
    padding: 2rem;
    margin: auto;
    display: flex;
    justify-content: space-around;
    color: rgb(183, 183, 183);
    font-weight: bold;
}

input[type="radio"] {
    display: none;
}

label {
    cursor: pointer;
    padding: 0.5rem;
    font-size: 1.5rem;
    transition: 0.3s ease-in-out;
}

input[type="radio"]:checked + label {
  color: #2c3e50;
}

input[type="radio"]:checked + label > span {
    border-color: #2c3e50;
}

span {
    display: inline-block;
    text-align: center;
    width: 25px;
    height: 25px;
    border: 2px solid rgb(183, 183, 183);
    border-radius: 50%;
}

/* Personal Details & health condition*/
.info {
    max-width: 700px;
    text-align: left;
    margin: auto;
    background-color: white;
    padding: 1.5rem 2rem;
    box-shadow: 1px 1px 3px grey;
    border-radius: 1rem;
}

.health {
    max-width: 700px;
    text-align: left;
    margin: auto;
    background-color: white;
    padding: 1.5rem 2rem;
    box-shadow: 1px 1px 3px grey;
    border-radius: 1rem;
}

.info p,
.health p {
    font-size: 1.5rem;
    border-bottom: 1px solid rgb(185, 185, 185);
}

.btn {
    all:unset;
    cursor: pointer;
    font-size:1.5rem;
    background-color: #F5F5DD;
    padding: 5px 0.5rem;
    border-radius: 5px;
    width: 100%;
    font-weight: bold;
    text-align:center;
}

.btn:hover {
    box-shadow: 1px 1px 3px grey;
}


.edit i.fa-edit {
    transform: translate(20%, 0%)
}
</style>