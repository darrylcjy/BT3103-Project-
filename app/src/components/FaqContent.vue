<template>
  <div>
    <h1>FAQs</h1>
    <p class="more-info">Last updated: 19/3/2022. More FAQs can be obtained <a href="https://ask.gov.sg/agency/moh" target="_blank">here</a></p>

    <!-- Radio Buttons to select content -->
    <div class="selection">
      <p>Please select one of the following:</p>
      <div class="choice">
        <input type="radio" id="covid-positive" v-model= "selected" value="covid-positive" checked>
        <label for="covid-positive">COVID Positive</label>
      </div>

      <div class="choice">
        <input type="radio" id="close-contact" v-model= "selected" value="close-contact">
        <label for="close-contact">Close Contact</label>
      </div>
      
      <div class="choice">
        <input type="radio" id="safety-measures" v-model= "selected" value="safety-measures">
        <label for="safety-measures">COVID Related Measures</label>
      </div>
    </div>
  
    <!-- contents -->
    <div class="content">
      <div v-if="selected == 'covid-positive'" class="positive">
        <p class="header-faq">Covid-19 Positive FAQ</p>
        <details class="faq faq1">
          <summary class="qns">After testing positive on ART self-test kit, do I need to report my results to MOH?</summary>

          <div class="ans">
            <ul>
              <li>If you are feeling well, you do not need to report your results</li>
              <li>It is recommended for <a target="_blank" href="https://www.covid.gov.sg/well-and-positive-or-condition-assessed-mild-by-doctor"> high risk individuals </a> to see a doctor even if they are feeling well</li>
              <li>If you become unwell at any time (with symptoms), see a doctor</li>
              <li>For more information, click <a href="https://ask.gov.sg/questions/512" target="_blank"> here</a></li>
            </ul>
          </div>
        </details>
        <details class="faq faq2">
          <summary class="qns">What should I do if I am tested positive for COVID-19 but have no symptoms?</summary>

          <div class="ans">
            <p> Procedures after you first tested positive (Day 1) : </p>
            <ol>
              <li>Self-isolate at home for 72 hours</li>
              <li>At the end of 72 hours, take an ART test</li>
              <li>If negative, you can exit self isolation and resume normal activities</li>
              <li>If continue to test positive, continue to self-isolate and self-test
                <ul>
                  <li>until a negative result <u>OR</u></li>
                  <li>until 12pm on Day 7 (for vaccinated individuals and children below 12 years old) <u>OR</u></li>
                  <li>Day 14 (for unvaccinated / partially vaccinated individuals aged 12 years old and above), without a need to test</li>
                </ul>
                ,whichever is earliest</li>
              <li>For more information, click <a href="https://www.covid.gov.sg/well-and-positive-or-condition-assessed-mild-by-doctor" target="_blank">here</a></li>
            </ol>
          </div>
        </details>
        <details class="faq faq3">
          <summary class="qns">What should I do if I am tested positive for COVID-19 and feeling unwell?</summary>

          <div class="ans">
            <ul>
              <li>Keep calm. There is no need to rush to a hospital emergency department to get tested </li>
              <li>Visit a doctor via private transport or request for a Telemedicine (TM) consult via a TM provider. The doctor will assess and advise you on your next steps</li>
              <li>You will either be placed on the <a href="https://www.covid.gov.sg/unwell/hrp" target="_blank">Home Recovery Programme (HRP)</a> by default, or if your home environment is not suitable, you can recover at the appropriate care facilities</li>
              <li>For more information, click <a href="https://www.covid.gov.sg/unwell/overview">here</a></li>
            </ul>
          </div>
        </details>
        <details class="faq faq4">
          <summary class="qns">What should I do if my employer wants me to report to work when I have tested positive for COVID-19 but am well? </summary>

          <div class="ans">
            <ul>
              <li>If you test positive for COVID-19, you must self-isolate for at least 72 hours and work from home even if you are physically well (follow the procedures)</li>
              <li>If working from home is not possible, your employer should treat the period of absence as paid sick leave without requiring a medical certificate</li>
              <li>You should not be asked to take no-pay leave for the period of self-isolation</li>
              <li>You may return to the workplace when you get a negative ART result after 72 hours</li>
              <li>For more information, click <a href="https://www.mom.gov.sg/covid-19/advisory-on-work-and-leave-arrangements-for-employees-who-test-art-positive-but-are-physically-well" target="_blank">here</a></li>
            </ul>
          </div>
        </details>
        <details class="faq faq5">
          <summary class="qns">What is Home Recovery Programme (HRP)? </summary>

          <div class="ans">
            <ul>
              <li>
                This Programme is for individuals who have been tested positive by a doctor and are assessed to be eligible
              </li>
              <li>Procedures:
                <ol>
                  <li>You should immediately self-isolate from other household members in a separate room for 72 hours, preferably with an attached bathroom. Do not interact with anyone. Do not leave your house.</li>
                  <li>You would recieve an SMS from TraceTogether. Open your TraceTogether App immediately and upload your TraceTogether Data with the PIN in your SMS.</li>
                  <li>You would receive an SMS to fill in a mandatory form within 24 hours upon notification of your positive result</li>
                  <li>Receive an advisory SMS within 48 hours of your positive result on HealthHub</li>
                  <li>At the end of 72 hours, you should do a self-administered ART.</li>
                  <li>If you test negative, you can exit self-isolation and resume normal activities.</li>
                  <li>If you continue to test positive, self-isolate and self-test until
                    <ul>
                      <li>until a negative result <u>OR</u></li>
                      <li>until 12pm on Day 7 (for vaccinated individuals and children below 12 years old) <u>OR</u></li>
                      <li>Day 14 (for unvaccinated / partially vaccinated individuals aged 12 years old and above), without a need to test</li>
                    </ul>
                  whichever comes first
                  </li>
                </ol>
              </li>
              <li>For more information, click <a href="https://www.covid.gov.sg/unwell/hrp" target="_blank">here</a></li>
            </ul>
          </div>
        </details>
      </div>

      <div v-if="selected == 'close-contact'" class="close-contact"> 
        <p class="header-faq">Close Contact FAQ</p>
        <details class="faq faq6">
          <summary class="qns">A member of my household, or a colleague whom I had close contact with at work, tested positive on the Antigen Rapid Test (ART) but is well, what should I do?</summary>

          <div class="ans">
            <p> While you will not be issued a Health Risk Notice (HRN), we <a href="https://ask.gov.sg/questions/509" target="_blank">recommend</a> that you take the following precautions: </p>
            <ul>
              <li>Minimise contact with the person who had tested ART positive.</li>
              <li>Take an ART self-test within 24 hours of your last contact with the person.</li>
              <li>Should you need to leave your home over the next 5 days, e.g. for work or to school, take an ART self-test on the same day. If negative, you can leave your home. If positive, follow protocol.</li>
              <li>For more information, click <a href="https://www.covid.gov.sg/exposed/no-hrn" target="_blank"> here</a></li>
            </ul>
          </div>
        </details>
        <details class="faq faq7">
          <summary class="qns">I live with somebody who has visited a doctor and tested positive for COVID-19, what should I do?</summary>

          <div class="ans">
            <p> If a household member has tested positive for COVID-19 and assessed by a doctor, he/she will be asked to nominate you and your household members as close contacts.</p>
            <ul>
              <li>You and your household members will receive a Health Risk Notice (HRN) via SMS.</li>
              <li>For more information on HRN, click <a href="https://www.covid.gov.sg/exposed/hrn" target="_blank"> here</a></li>
            </ul>
          </div>
        </details>
        <details class="faq faq8">
          <summary class="qns">I am a close contact and was given Health Risk Notice (HRN), what should I do?</summary>

          <div class="ans">
            <p>The HRN is for a period of 5 days. Procedures are as follows:</p>
            <ol>
              <li>You should take an ART self-test within 24 hours. You can continue with normal activities for the day if the test result is negative.</li>
              <li>If you need to leave your house, you should do an ART self-test once a day before leaving your house during the 5-day HRN period</li>
              <ul>
                <li>If you test ART negative, you can leave your house for normal activities. Do minimise unnecessary social interactions. You must still complete the 5-day monitoring period.</li>
                <li>If you test ART positive, please follow positive COVID-19 procedures</li>
              </ul>
              <li>For more information on HRN, click <a href="https://www.covid.gov.sg/exposed/hrn" target="_blank"> here</a></li>
            </ol>
          </div>
        </details>
        <details class="faq faq9">
          <summary class="qns">I received a Health Risk Notice (HRN) via SMS. Can I go out to buy food, see a doctor, or go to work or school?</summary>

          <div class="ans">
            <p> The HRN is for a period of 5 days. You should only do so when you self-test ART negative for that day.</p>
            <ol>
              <li>If you test positive at any time, self-isolate and follow procedures for positive COVID-19 case</li>
              <li>For more information on HRN, click <a href="https://www.covid.gov.sg/exposed/hrn" target="_blank"> here</a></li>
            </ol>
          </div>
        </details>
        <details class="faq faq10">
          <summary class="qns">How does MOH determine if someone is a close contact of a confirmed case?</summary>

          <div class="ans">
            <p> MOH conducts contact tracing to identify people who have been in contact with the confirmed case. </p> 
            <ul>
              <li>A close contact is defined as someone who has spent 15 minutes or more within 2 metres of the infected individual.</li>
              <li>MOH also considers the nature and setting of exposure, type of personal protective equipment donned, and other clinical and epidemiological factors when assessing if follow up actions are required for the close contacts.</li>
              <li>Identified close contacts will be advised by MOH officials on the measures they should take.</li>
              <li>This information can be obtained <a href="https://ask.gov.sg/questions/473" target="_blank"> here</a></li>
            </ul>
          </div>
        </details>
      </div>

      <div v-if="selected == 'safety-measures'" class="current-measures">
        <div class="images">
          <p class= "header-faq">Newest Updates to Measures</p>
          <p class="footnote">For more information on the current measures, click <a href="https://www.moh.gov.sg/covid-19-phase-advisory" target="_blank">here</a></p>
          <img v-show="imgshow == 'img1'" src="../assets/measures2903.png" alt="Measures Updates" height="500px">
          <img v-show="imgshow == 'img2'" src="../assets/measures2.png" alt="Measures Updates" height="420px">
          <div class="img-choice">
            <input type="radio" name="r-btn" id="r1" v-model="imgshow" value="img1">
            <input type="radio" name="r-btn" id="r2" v-model="imgshow" value="img2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "covid-positive",
      imgshow: "img1"
    }
  },
  
  mounted() {
    if (this.$route.params.measure === "2") {
      this.selected = "close-contact"
    }
  }

}
</script>

<style scoped>
.header-faq {
  font-weight: bold;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
}

h1 {
  text-align: center;
  margin-bottom: 0rem;
}

.more-info {
  text-align: center;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}


/* Selection radio buttons styling */
.selection {
  background-color: rgba(245, 245, 221, 0.5);
  font-size: 1.5rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
}

.selection > p {
  margin-bottom: 1rem;
  margin-top: 0rem;
  font-size: 1.5rem;
}

.choice {
  margin-left: 1.5rem;
}

.choice > label {
  padding: 0.25rem;
}

/* faq qns content styling */

.positive,
.close-contact {
  max-width: 800px;
  margin: auto;
  text-align: left;
}

.positive,
.close-contact,
.current-measures {
  margin-bottom: 1rem ;
}


.faq {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  line-height: 2rem;
  border: 1px solid black;
}

.faq:hover{
  background-color: rgba(183, 218, 250, 0.15);
  box-shadow: 1px 1px 3px black;
  cursor: pointer;
}

.qns {
  font-weight: bold;
  font-size: 1.5rem;
}

.ans {
  font-size: 1.25rem;
}

/* For the measures styling */
@media(max-width: 775px) {
  .selection{
    flex-direction: column;
    width: 100%;
  }

  img {
    width: 100%;
  }
}

.footnote {
  font-size: 1rem;  
}

img {
  display: block;
  box-shadow: 1px 1px 3px gray;
  max-width: 725px;
  height: 420px;
  padding: 1rem;
  border-radius: 1rem;
  margin: auto;
}

.images h1 {
  margin-bottom: 1.5rem;
}

.img-choice input {
  border: 0px;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
}

.img-choice {
  margin: 0.25rem 1rem;
}
</style>