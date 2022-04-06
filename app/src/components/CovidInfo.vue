<template>
    <div class="main">
        <div class="latest">
            <br>
            <h1 class="news">Latest Singapore COVID-19 Numbers</h1><hr>
            <div class="graph">
                <iframe class="numbers" src="https://data.gov.sg/dataset/covid-19-case-numbers/resource/6c14814b-09b7-408e-80c4-db3d393c7c15/view/f2df5f18-cbcf-4eea-b15e-f80661980b0f" frameBorder="0"> </iframe>
                <!-- <iframe class="numbers" src="https://ourworldindata.org/explorers/coronavirus-data-explorer?facet=none&Metric=Confirmed+cases&Interval=New+per+day&Relative+to+Population=true&Color+by+test+positivity=false&country=~SGP&hideControls=true" frameBorder="0"></iframe> -->
            </div>
        </div>
        <div class="measures">
            <h1 class= "header-faq">Latest Updates to Safe Management Measures</h1> <hr>
            <p class="note">Last Updated: 05/04/22. For further information on current SMMs, click <a href="https://www.moh.gov.sg/covid-19-phase-advisory" target="_blank">here</a>.</p>
            <div class="images">
                <img v-show="imgshow == '0'" src="../assets/1.png" alt="Key Measures Updates Part 1">
                <img v-show="imgshow == '1'" src="../assets/2.png" alt="Key Measures Updates Part 2">
                <img v-show="imgshow == '2'" src="../assets/3.png" alt="Mask Infographics">
                <img v-show="imgshow == '3'" src="../assets/4.png" alt="SG-Malaysia Travel Guide">
                <img v-show="imgshow == '4'" src="../assets/5.png" alt="Travelling Measures Updates Part 1">
                <img v-show="imgshow == '5'" src="../assets/6.png" alt="Travelling Measures Updates Part 2">
                <img v-show="imgshow == '6'" src="../assets/7.png" alt="NightLife Measures Updates">

                <!-- Next and Previous Buttons -->
                <div class="nav">
                    <button class="prev" @click="changeImg(-1)">
                        <i class='fas fa-angle-left' ></i>
                    </button>
                    <button class="next" @click="changeImg(1)">
                        <i class='fas fa-angle-right' ></i>
                    </button>
                </div>
            </div>
                
            <div class="img-choice">
                <input type="radio" name="r-btn" id="r1" v-model="imgshow" value="0">
                <input type="radio" name="r-btn" id="r2" v-model="imgshow" value="1">
                <input type="radio" name="r-btn" id="r2" v-model="imgshow" value="2">
                <input type="radio" name="r-btn" id="r3" v-model="imgshow" value="3">
                <input type="radio" name="r-btn" id="r4" v-model="imgshow" value="4">
                <input type="radio" name="r-btn" id="r5" v-model="imgshow" value="5">
                <input type="radio" name="r-btn" id="r7" v-model="imgshow" value="6">
            </div>
        </div>
    </div>
    
  
</template>

<script>
export default {
  data() {
    return {
      imgshow: "0",
      totalimg: 7
    }
  },
  mounted() {
      setInterval(this.changeImg, 10000)
  },
  methods: {
      changeImg(dir = 1) {
          if (dir === 1) {
            //forward
            const z = parseInt(this.imgshow)
            const index = (z+1)%this.totalimg
            this.imgshow = index.toString()
          } else if (dir === -1) {
            //backward
            const z = parseInt(this.imgshow) + this.totalimg
            const index = (z-1)%this.totalimg
            this.imgshow = index.toString()
          }
      }
  }
}
</script>

<style scoped>
.main {
    max-width: 1000px;
    margin: auto;
    margin-top: 3rem;
}
h1,
.note {
    text-align: left;
}
.numbers {
    width: 1000px;
    height: 500px;
}

/* Current SMM Info */
.measures {
    margin-top: 3rem;
}

img {
    border: 1px solid #2c3e50;
    width: 100%;
}

.images {
    position: relative;
    margin: auto;
}

/* Styling prev and next button */
.nav {
    position:absolute;
    top: 45%;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

button {
    all: unset;
    cursor: pointer;
    margin: 0.1rem;
    padding: 1rem 0.8rem;
    color: rgb(183, 183, 183);
    transition: 0.6s ease;
}

button i {
    font-weight: bold;
    font-size: 30px;
}

/* On hover, change the background thats transparent black */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.6);
  color: white;
}

/* style input radio button */
input[type="radio"] {
    appearance: none;
    cursor: pointer;
    background-color: white;
    width: 1.15em;
    height: 1.15em;
    border:0.15em solid grey;
    border-radius: 50%;

}

input[type="radio"]:checked {
    background-color: rgb(183, 183, 183);
}

.graph iframe {
    width: 100%;
}

</style>