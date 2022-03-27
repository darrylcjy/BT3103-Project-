<template>
    <div class="info">
        <h1>Profile Page</h1>
        <p><b>Name:</b> {{this.name}}</p>
        <p><b>Phone Number:</b> {{this.phone}}</p>
        <p><b>Age:</b> {{this.age}}</p>
        <p><b>Address:</b> {{this.address}}</p>
        <p><b>Postal Code:</b> {{this.postal}}</p>
        <p><b>Vaccination Status:</b> {{this.vax}}</p>
        <div class="edit">
            <button class="btn" @click="redirect()">Edit<i class="fas fa-edit"></i></button>
        </div>
    </div>
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
            name: "",
            phone: "",
            age: "",
            address: "",
            vax: "",
            postal: ""
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
            this.age = data.age
            this.address = data.address
            this.postal = data.postal
            this.vax = data.vax
        },

        redirect() {
            this.$router.push({name:"Update"})
        }
    }

}
</script>

<style scoped>
.info {
    max-width: 700px;
    text-align: left;
    margin: auto;
    background-color: white;
    padding: 1.5rem 2rem;
    box-shadow: 1px 1px 3px grey;
    border-radius: 1rem;
    transform: translate(0, 10%)
}

p {
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