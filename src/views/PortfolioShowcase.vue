<template>
    <div class="portfolio-container">
      <!-- Back Button in the upper left corner -->
      <router-link to="/home" class="back-button">Back</router-link>
  
      <div class="portfolio-header">
        <h2>Portfolio Showcase</h2>
      </div>
      
      <div class="portfolio-items">
        <div class="portfolio-item" v-for="item in portfolioItems" :key="item.id">
          <img :src="item.image" alt="Portfolio item" class="portfolio-image" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <button @click="viewProject(item.id)">View Project</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      portfolioItems: [
        { id: 1, title: 'Project 1', description: 'Description of project 1', image: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Project 2', description: 'Description of project 2', image: 'https://via.placeholder.com/150' },
        { id: 3, title: 'Project 3', description: 'Description of project 3', image: 'https://via.placeholder.com/150' },
        { id: 4, title: 'Project 4', description: 'Description of project 4', image: 'https://via.placeholder.com/150' },
        { id: 5, title: 'Project 5', description: 'Description of project 5', image: 'https://via.placeholder.com/150' },
        { id: 6, title: 'Project 6', description: 'Description of project 6', image: 'https://via.placeholder.com/150' },
        { id: 7, title: 'Project 7', description: 'Description of project 7', image: 'https://via.placeholder.com/150' },
        { id: 8, title: 'Project 8', description: 'Description of project 8', image: 'https://via.placeholder.com/150' },
        { id: 9, title: 'Project 9', description: 'Description of project 9', image: 'https://via.placeholder.com/150' },
        { id: 10, title: 'Project 10', description: 'Description of project 10', image: 'https://via.placeholder.com/150' },
      ],
    };
  },
  methods: {
    viewProject(id) {
      console.log('View project with id:', id);
      this.$router.push({ name: 'portfolio', params: { id } });
    },
  },
};

  </script>
  
  <style scoped>
  /* Importing Google Font: 'Press Start 2P' for pixel style */
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
  .portfolio-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers all child elements, including the grid */
  background-color: #F5EFFF; /* Background color */
  color: #624E88;
  min-height: 100vh;
  padding: 20px;
}
  .portfolio-header h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 36px;
    text-align: center;
    color: #624e88;
    margin-bottom: 20px;
  }
  
  .portfolio-items {
  margin-top: 0.7in; /* 1.5-inch margin from the header */
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 items per row */
  gap: 0.3in; /* 0.3-inch gap between items */
  max-width: 1200px; /* Limit the grid width */
  justify-content: center; /* Center the grid horizontally */
}
  
  .portfolio-item {
    background: #E5D9F2; /* Section background color */
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .portfolio-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .portfolio-item h3 {
    color: #624e88;
    margin-top: 10px;
  }
  
  .portfolio-item p {
    color: #666;
    margin-bottom: 15px;
  }
  
  button {
    padding: 12px 30px;
    background-color: #624e88;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #4a3a69;
  }
  
  /* Styling for the back button in the upper left corner */
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
    text-decoration: none; /* Remove underline from the text */
    min-width: 120px; /* Ensures the button has a minimum width */
  }
  
  .back-button:hover {
    background-color: #4a3a69;
  }
  </style>
  