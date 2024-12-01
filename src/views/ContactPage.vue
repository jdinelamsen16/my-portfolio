<template>
    <div class="contact-container">
      <!-- Back Button -->
      <router-link to="/home" class="back-button">Back</router-link>
  
      <!-- Page Header -->
      <h1 class="header">Contact Page</h1>
  
      <div class="main-layout">
        <!-- Left Column: Contact Info and Messages -->
        <div class="left-column">
          <!-- Contact Info Section -->
          <div class="contact-info">
            <div class="profile-pic">
              <img src="@/assets/profile-picture.png" alt="Profile Picture" />
            </div>
            <div class="info-text">
              <h2>Contact Info</h2>
              <p><strong>Email:</strong> mjlamsen@tip.edu.ph</p>
              <p><strong>Phone Number:</strong> 09931485453</p>
            </div>
          </div>
  
          <!-- Messages Section -->
          <div class="messages-section">
            <h2>Messages</h2>
            <!-- Loop through messages and display each -->
            <div v-for="(message, index) in messages" :key="index" class="message">
              <p><strong>{{ message.name }}</strong> ({{ message.email }})</p>
              <p>{{ message.message }}</p>
              <p><small>Posted on: {{ message.date }}</small></p>
            </div>
          </div>
        </div>
  
        <!-- Right Column: Leave a Message Form -->
        <div class="message-form">
          <h2>Leave a Message</h2>
          <form @submit.prevent="submitMessage">
            <!-- Name Input Field -->
            <div>
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="newMessage.name" required />
            </div>
  
            <!-- Email Input Field -->
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="newMessage.email" required />
            </div>
  
            <!-- Message Textarea Field -->
            <div>
              <label for="message">Message:</label>
              <textarea id="message" v-model="newMessage.message" required></textarea>
            </div>
  
            <!-- Submit Button -->
            <button type="submit">Post Message</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      // Data for new message being typed
      newMessage: {
        name: "",
        email: "",
        message: "",
      },
      // Array to store all messages
      messages: [],
    };
  },
  methods: {
    // Method to handle message submission
    submitMessage() {
      const newMessage = {
        ...this.newMessage,
        date: new Date().toLocaleString(),
      };
      this.messages.push(newMessage);
      // Reset the input fields after submission
      this.newMessage.name = "";
      this.newMessage.email = "";
      this.newMessage.message = "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

/* Contact Page Styles */
.contact-container {
  background-color: #f5efff;
  color: #4a4a4a; /* Default text color */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

/* Back Button Style */
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 12px 40px;
  background-color: #624e88;
  color: white;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

/* Header Style */
.header {
  font-family: "Press Start 2P", cursive;
  margin-top: 20px;
  font-size: 32px;
  color: #624e88;
}

/* Main Layout (Two Columns) */
.main-layout {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
}

/* Left Column Styles */
.left-column {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
}

/* Contact Info and Messages Sections */
.contact-info,
.messages-section {
  background-color: #e5d9f2;
  padding: 20px;
  border-radius: 8px;
}

/* Modify Contact Info Section */
.contact-info {
  display: flex;
  gap: 20px;
  align-items: center; /* Centers content vertically */
  border: 10px solid #CDC1FF; /* Added border */
  background-color: #624e88; /* Changed background color */
  color: #f5efff; /* Changed text color */
  border-radius: 8px; /* Rounded inside corners */
}

/* Section Headers */
.contact-info h2 {
  font-family: "Press Start 2P", cursive;
  font-size: 20px;
  color: #F5EFFF; /* Changed header color */
}

.messages-section h2,
.message-form h2 {
  font-family: "Press Start 2P", cursive;
  font-size: 20px;
  color: #624e88; /* Changed header color */
}

/* Profile Picture Styling */
.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #E5D9F2;
}

.profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Messages Section Style */
.messages-section {
  margin-top: 5px;
  max-height: 580px;
  overflow-y: auto;
  flex-grow: 1; /* Allows it to expand without affecting other sections */
}

/* Message Form Styles */
.message-form {
  width: 40%;
  background-color: #e5d9f2;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 460px; /* Increased height for form */
  flex-shrink: 0; /* Prevent shrinking when messages expand */
}

/* Form Input and Textarea Styles */
.message-form input,
.message-form textarea {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

/* Submit Button Style */
.message-form button {
  background-color: #624e88;
  color: white;
  padding: 12px 40px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  align-self: center;
}

.message-form button:hover {
  background-color: #4a3a69;
}

.message {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  width: 100%; /* Ensure it takes the full available width */
  max-width: 100%; /* Prevent overflow */
  word-wrap: break-word; /* Break words if necessary */
  white-space: pre-wrap; /* Ensure text wraps as needed */
  word-break: break-word; /* Handle long words */
}

/* Limiting the width to simulate the 55 characters per line */
.message p {
  max-width: 55ch; /* 55 characters */
  word-wrap: break-word;
}
</style>
