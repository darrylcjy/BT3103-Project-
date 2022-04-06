<template>
    <div v-if="user">
        <div v-if="noprofile">
            <NoProfile/>
        </div>
        <div v-else-if="nohealth">
            <NoHealth/>
        </div>
        <div v-else-if="this.noprofile == false && this.nohealth == false">
            <NavigationBar/>
            <h1>Update Personal Details</h1>
            <div class="details">
                <div>Username: {{this.user.displayName}}</div>
                <div>Email: {{this.user.email}}</div>
            </div>
            <UpdateForm :email="this.user.email"/>
        </div>
    </div>
    <div v-else-if="this.user == false">
        <NotLoggedIn/>
    </div>
</template>

<script>
import UpdateForm from '../components/UpdateForm.vue' 
import NavigationBar from '../components/NavigationBar.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import NotLoggedIn from '../components/NotLoggedIn.vue'
import NoProfile from '../components/NoProfile.vue'
import NoHealth from '../components/NoHealth.vue'
import firebaseApp from "../firebase.js"
import {getFirestore} from "firebase/firestore"
import {doc, getDoc} from "firebase/firestore"
const db = getFirestore(firebaseApp);

export default {
    name:'Update',
    components: {
        UpdateForm,
        NavigationBar,
        NotLoggedIn,
        NoProfile,
        NoHealth
    },

    data() {
        return {
            user: null,
            nohealth: null,
            noprofile: null
        }
    },

    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user
                this.getData()
            } else {
                this.user = false
            }
        })
    },

    methods: {
      async getData() {
        const auth = getAuth()
        this.email = auth.currentUser.email

        let z = await getDoc(doc(db, "details", String(this.email)))

        let data = z.data()

        try {
          console.log(data.name)

          if (data.pregnant == null) {
            this.nohealth = true
          } else {
              this.nohealth = false
              this.noprofile = false
          }
        } catch (error) {
          console.error("Error getting document: ", error);
          this.noprofile = true
        }
      }
    }
}
</script>

<style scoped>
.details{
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0.5rem;
    
}

.details div {
    font-size: 1.5rem;
    padding: 0.5rem;
}

h1 {
    margin-bottom: 0.2rem;
    text-align: center;
}

@media(max-width: 700px) {
    .details{
        flex-direction: column;
        gap: 0rem;
    }
}

</style>