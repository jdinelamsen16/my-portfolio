<template>
    <div class="profile-page">
      <button @click="goBack" class="back-button">Back</button>
      <h1 class="profile-title">Profile Page</h1>
  
      <div class="profile-header">
        <img src="@/assets/profile-picture.png" alt="Profile Picture" class="profile-picture" />
        <h2>Jannahdine Logan Lamsen</h2>
      </div>

      <section class="profile-section">
        <h2 class="section-title">Social Media Links</h2>
        <ul>
            <li><strong>Facebook:</strong> <a href="https://www.facebook.com/skyezieeel" target="_blank">https://www.facebook.com/skyezieeel</a></li>
            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/jaelamsen" target="_blank">https://www.instagram.com/jaelamsen</a></li>
        </ul>
      </section>

  
      <section class="profile-section">
        <h2 class="section-title">Personal Information</h2>
        <ul>
          <li><strong>First Name:</strong> <span>Jannahdine</span></li>
          <li><strong>Middle Name:</strong> <span>Logan</span></li>
          <li><strong>Last Name:</strong> <span>Lamsen</span></li>
          <li><strong>Sex:</strong> <span>Female</span></li>
          <li><strong>Birthdate:</strong> <span>September 16, 2000</span></li>
          <li><strong>Birthplace:</strong> <span>Quezon City</span></li>
          <li><strong>Nationality:</strong> <span>Filipino</span></li>
        </ul>
      </section>
  
      <section class="profile-section">
        <h2 class="section-title">Educational Background</h2>
        <ul>
          <li><strong>College:</strong> <span>Technological Institute of the Philippines (TIP)</span></li>
          <li><strong>Program:</strong> <span>BS Computer Engineering</span></li>
          <li><strong>Specialization:</strong> <span>Data Science</span></li>
          <li><strong>Student Number:</strong> <span>2320057</span></li>
        </ul>
      </section>
  
      <section class="profile-section">
        <h2 class="section-title">Skills and Interests</h2>
        <ul>
          <li><strong>Programming Languages:</strong> <span>Python, JavaScript, C++</span></li>
          <li><strong>Hobbies:</strong> <span>Reading, Drawing, Playing Games, Listening to Music</span></li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfilePage",
    methods: {
      goBack() {
        this.$router.go(-1); // Navigate to the previous page in history
      },
    },
  };
  </script>
  
  <style scoped>
  /* Importing Google Font: 'Press Start 2P' for pixel style */
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
  .profile-page {
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #624e88;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #f5efff; /* Plain background */
  }
  
  .profile-title {
    font-family: 'Press Start 2P', cursive;
    color: #624e88;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .profile-picture {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #624e88;
    margin-bottom: 10px;
  }
  
  .profile-section {
    margin-bottom: 20px;
    background: #e5d9f2;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 500px;
  }
  
  .section-title {
    font-family: 'Press Start 2P', cursive;
    font-size: 16px; /* Smaller font size */
    color: #624e88;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  
  strong {
    color: #4a4a4a; /* Updated text color */
  }
  
  span {
    color: #4a4a4a; /* Details text color */
  }
  
  .back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 12px 40px; /* Increased horizontal padding for wider button */
    background-color: #624e88;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 25px; /* More rounded corners */
    cursor: pointer;
    font-weight: bold;
  }
  
  .back-button:hover {
    background-color: #4a3a69;
  }
  </style>
  #4a4a4a