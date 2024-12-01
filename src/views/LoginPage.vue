<template>
    <div class="login-container">
      <div class="login-form">
        <h2>VueJs Portfolio</h2>
        <p>Login</p>
  
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              required
            />
          </div>
  
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
  
          <button type="submit" class="login-button">Login</button>
        </form>
  
        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      handleLogin() {
        const validUsername = 'user';
        const validPassword = 'pass';
  
        if (this.username === validUsername && this.password === validPassword) {
          this.$router.push({ name: 'home' });
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
  /* Login Page Styles */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5efff;
  }
  
  .login-form {
    background: white;
    padding: 70px; /* Increased padding for larger content */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px; /* Increased width for larger form */
    text-align: center;
  }
  
  h2 {
    margin-bottom: 15px; /* Increased margin for more spacing */
    font-size: 36px; /* Larger font size for header */
    color: #624e88;
    font-family: 'Press Start 2P', cursive;
  }
  
  p {
    margin-bottom: 40px; /* Increased margin for more spacing */
    font-size: 24px; /* Larger font size for subtitle */
    color: #cdc1ff;
    font-family: 'Press Start 2P', cursive;
  }
  
  .input-group {
    margin-bottom: 30px; /* Increased margin for larger input groups */
    text-align: left;
  }
  
  .input-group label {
    display: block;
    font-size: 20px; /* Larger font size for labels */
    color: #4a4a4a;
    margin-bottom: 10px;
  }
  
  .input-group input {
    width: 100%;
    padding: 18px; /* Increased padding for larger inputs */
    font-size: 20px; /* Larger font size for input text */
    border: 1px solid #d1c6e0;
    border-radius: 8px;
    transition: border 0.3s;
  }
  
  .input-group input:focus {
    border-color: #6a4cff;
    outline: none;
  }
  
  .login-button {
    width: 100%;
    padding: 18px; /* Increased padding for larger button */
    font-size: 20px; /* Larger font size for button text */
    background-color: #624e88;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .login-button:hover {
    background-color: #4c3d6e;
  }
  
  .error-message {
    color: red;
    font-size: 20px; /* Larger font size for error message */
    margin-top: 15px;
    font-family: 'Arial', sans-serif;
  }
  </style>
  