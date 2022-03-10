<template>
    <!-- Form to fill in on registration -->
  <form id="form" action="">
      <h1>Personal Details</h1>
      <div class="inputs">
        <label for="name" class="form-label">NRIC Name</label>
        <input type="text" id="name" class="form-text" name="name" required>
        <div class="second-row">
            <div>
                <label for="phone" class="form-label">HP no.</label>
                <input type="tel" name="phone" id="phone" class="form-text hp" pattern="[3689]{1}[0-9]{7}" required>
            </div>
            
            <div>
                <label for="age" class="form-label">Age</label>
                <input type="number" name="age" id="age" class="form-text" min="0" max="120" required>
            </div>
        </div>
        
        <label for="email" class="form-label">Email</label>
        <input type="email" name="email" id="email" class="form-text" required>

        <div class="passwords">
            <div>
                <label for="old-password" class="form-label">Old Password</label>
                <input type="password" name="old-password" id="old-password" class="form-text" minlength="8">
            </div>
            
            <div>
                <label for="new-password" class="form-label">New Password</label>
                <input type="password" name="new-password" id="new-password" class="form-text" minlength="8">
            </div>
            
            <div>
                <label for="confirm-password" class="form-label">Confirm Password</label>
                <input type="password" name="confirm-password" id="confirm-password" class="form-text" minlength="8">
            </div>
        </div>
        
        <label for="address" class="form-label">Address</label>
        <input type="text" name="address" id="address" class="form-text" required>

        <label for="vaccination-status" class="form-label">Vaccination Status</label>
        <select name="vaccination-status" class="form-text dropdown" id="vaccination-status">
            <option value="booster">Received booster shot</option>
            <option value="two">Completed full regimen (2 dose) </option>
            <option value="one">Recieved at least one dose</option>
            <option value="none">Unvaccinated</option>
        </select>

      </div>
    
      <div class="btn">
          <button type="submit" class="details-btn">Next</button>
      </div>
  </form>

</template>

<script>
export default {

}
</script>

<style scoped>
#form {
    max-width: 650px;
    margin: auto;
    padding: 1rem 2rem 1rem 1rem;
}

.inputs {
    margin: 1.5rem 1.5rem
}

.form-label {
    display:block;
    font-size: 1.5rem;
}

.form-text {
    all:unset;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-bottom: 0.75rem;
}

h1 {
    text-align: center;
    margin-bottom: 0px;
}

p {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 1.5rem;
}

.btn {
    text-align: right;
}

.details-btn {
    all:unset;
    cursor: pointer;
    font-size:1.5rem;
    background-color: #F5F5DD;
    padding: 5px 0.5rem;
    border-radius: 10px;
    width: 6rem;
    text-align: center;
}

.second-row {
    display: flex;
    justify-content: space-between;

}

.passwords {
    display: flex;
    justify-content: space-between;
}

.passwords > div {
    width: 180px;
}


@media(max-width: 700px) {
    .second-row{
        flex-direction: column;
    }

    .passwords{
        flex-direction: column;
    }

    .passwords > div {
        width: 100%;
    }
}

</style>