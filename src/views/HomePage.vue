<template>
    <div class="dashboard-container">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="sidebar-header">
          <h3>Dashboard</h3>
        </div>
        <ul class="sidebar-nav">
          <li><button @click="goToHome">Home</button></li>
          <li><button @click="goToProfile">Profile</button></li>
          <li><button @click="goToPortfolio">Portfolio</button></li>
          <li><button @click="goToContact">Contact</button></li>
          <li><button @click="goToCreative">Creative</button></li>
        </ul>
      </div>
  
      <!-- Main Content -->
      <div class="main-content">
        <!-- Dynamic Content based on the button clicked -->
        <div v-if="currentPage === 'home'" class="content">
          <h1>WELCOME TO JANNAH'S PORTFOLIO</h1>
        </div>
        <!-- Add more dynamic content for Profile, Portfolio, etc. -->
        
        <!-- Logout button -->
        <button class="logout-button" @click="logout">Logout</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentPage: 'home', // Default to home page
      };
    },
    methods: {
      goToHome() {
        this.currentPage = 'home';
      },
      goToProfile() {
        this.$router.push({ name: 'profile' });
      },
      goToPortfolio() {
        this.$router.push({ name: 'portfolio' });
      },
      goToContact() {
        this.$router.push({ name: 'contact' });
      },
      goToCreative() {
        this.$router.push({ name: 'creative' });
      },
      logout() {
        // Clear any authentication (if applicable) and redirect to the login page
        this.$router.push({ name: 'login' });
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    width: 250px;
    background-color: #624e88;
    color: white;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .sidebar-header {
    text-align: center;
  }
  
  .sidebar-nav {
    list-style: none;
    padding: 0;
  }
  
  .sidebar-nav li {
    padding: 15px;
    text-align: center;
  }
  
  .sidebar-nav li button {
    width: 100%;
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .sidebar-nav li button:hover {
    background-color: #8c7aff;
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f5efff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  h1 {
    font-family: 'Press Start 2P', sans-serif;
    color: #624E88;
    font-size: 32px;
    margin-top: 20px;
    text-align: center;
  }
  
  .logout-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #f5efff;
    color: #624e88;
    border: 1px solid #624e88;
    cursor: pointer;
    font-size: 18px;
    border-radius: 5px;
  }
  
  .logout-button:hover {
    background-color: #624e88;
    color: white;
  }
  </style>
  