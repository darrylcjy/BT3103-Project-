<template>
    <!-- Form to Login -->
  <form id="login-form" action="">
      <h1>Login To Your Account</h1>
      <div class="inputs">
        <label for="email" class="form-label">Email</label>
        <input class="form-text" type="email" name="email" id="email" required>

        <label for="password" class="form-label">Password</label>
        <input class="form-text" type="password" name="password" id="password" required>
      </div>

      <div class="forget-password-link">
          <a href="#">Forgot Password</a>
      </div>
    
      <div class="btn">
          <button type="submit" class="login-btn">Sign In</button>
      </div>
  </form>

  <div class="no-account">
      <p>Don't have an account? <a href="#" class="redirect-register">Register here</a></p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#login-form {
    max-width: 500px;
    margin: auto;
    padding: 1rem 2rem 1rem 1rem;
}

.inputs {
    margin: 1.5rem 1.5rem 0.5rem
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


.form-text:last-child{
    margin-bottom: 0rem;
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

.login-btn {
    all:unset;
    cursor: pointer;
    font-size:1.5rem;
    background-color: #F5F5DD;
    padding: 5px 0.5rem;
    border-radius: 10px;
    margin-top: 1.5rem;
    width: 6rem;
    text-align: center;
}

.forget-password-link {
    text-align: right;
    margin-top: 0px;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
}

.no-account{
    margin-top: 20px;
    font-size: 1.5rem;
}

</style>