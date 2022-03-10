<template>
    <!-- Forget Password page with only email field -->
    <form id="form" action="">
      <h1>Reset Password</h1>
      <div class="inputs">
        <label for="email" class="form-label">Email</label>
        <input class="form-text" type="email" name="email" id="email" required>
      </div>
    
      <div class="btn">
          <button type="submit" class="reset-btn">Confirm</button>
      </div>
  </form>
</template>

<script scoped>
export default {

}
</script>

<style scoped>
#form {
    max-width: 500px;
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

.btn {
    text-align: right;
}

.reset-btn {
    all:unset;
    cursor: pointer;
    font-size:1.5rem;
    background-color: #F5F5DD;
    padding: 5px 0.5rem;
    border-radius: 10px;
    width: 6rem;
    text-align: center;
}
</style>