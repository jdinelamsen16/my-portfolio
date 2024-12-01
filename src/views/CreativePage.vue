<template>
    <div class="creative-container">
      <!-- Back Button -->
      <button class="back-button" @click="goBack">Back</button>
  
      <div class="creative-header">
        <h2>Creative Page</h2>
        <p>Test your memory with this Memory Match Puzzle Game!</p>
      </div>
  
      <!-- Timer -->
      <div class="timer">{{ formattedTime }}</div>
  
      <!-- Memory Match Game -->
      <div class="game-container">
        <div class="game-board">
          <div
            v-for="(card, index) in shuffledCards"
            :key="index"
            class="card"
            :class="{ 'flipped': card.flipped || card.matched }"
            @click="flipCard(card)"
          >
            <img v-if="card.flipped || card.matched" :src="card.image" alt="card image" />
            <div v-else class="card-back"></div>
          </div>
        </div>
        <p class="status">{{ gameStatus }}</p>
      </div>
  
      <!-- Try Again Button -->
      <button v-if="gameStatus === 'Congratulations! You completed the puzzle!' || timeLeft === 0" class="try-again-button" @click="resetGame">Try Again</button>
    </div>
  </template>
  
  <script>
  import image1 from '@/assets/image1.png';
  import image2 from '@/assets/image2.png';
  import image3 from '@/assets/image3.png';
  import image4 from '@/assets/image4.png';
  import image5 from '@/assets/image5.png';
  import image6 from '@/assets/image6.png';
  import image7 from '@/assets/image7.png';
  import image8 from '@/assets/image8.png';
  import image9 from '@/assets/image9.png';
  import image10 from '@/assets/image10.png';
  
  export default {
    data() {
      return {
        cards: [
          { id: 1, image: image1, flipped: false, matched: false },
          { id: 2, image: image2, flipped: false, matched: false },
          { id: 3, image: image3, flipped: false, matched: false },
          { id: 4, image: image4, flipped: false, matched: false },
          { id: 5, image: image5, flipped: false, matched: false },
          { id: 6, image: image6, flipped: false, matched: false },
          { id: 7, image: image7, flipped: false, matched: false },
          { id: 8, image: image8, flipped: false, matched: false },
          { id: 9, image: image9, flipped: false, matched: false },
          { id: 10, image: image10, flipped: false, matched: false },
          // duplicate cards for matching
          { id: 1, image: image1, flipped: false, matched: false },
          { id: 2, image: image2, flipped: false, matched: false },
          { id: 3, image: image3, flipped: false, matched: false },
          { id: 4, image: image4, flipped: false, matched: false },
          { id: 5, image: image5, flipped: false, matched: false },
          { id: 6, image: image6, flipped: false, matched: false },
          { id: 7, image: image7, flipped: false, matched: false },
          { id: 8, image: image8, flipped: false, matched: false },
          { id: 9, image: image9, flipped: false, matched: false },
          { id: 10, image: image10, flipped: false, matched: false },
        ],
        flippedCards: [],
        gameStatus: 'Try to match the cards!',
        timeLeft: 60,
        timer: null
      };
    },
    computed: {
      shuffledCards() {
        return [...this.cards].sort(() => Math.random() - 0.5);
      },
      formattedTime() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;


      }
    },
    methods: {
        flipCard(card) {
            // Prevent flipping if time is up or game is over
            if (this.timeLeft === 0 || this.gameStatus === 'Congratulations! You completed the puzzle!' || card.flipped || this.flippedCards.length === 2 || card.matched) return;

            card.flipped = true;
            this.flippedCards.push(card);

            if (this.flippedCards.length === 2) {
                setTimeout(this.checkMatch, 1000);
            }
        },

      checkMatch() {
        const [card1, card2] = this.flippedCards;
  
        if (card1.image === card2.image) {
          card1.matched = true;
          card2.matched = true;
          this.gameStatus = 'Match found! Keep going!';
        } else {
          card1.flipped = false;
          card2.flipped = false;
          this.gameStatus = 'Try again!';
        }
  
        this.flippedCards = [];
  
        if (this.cards.every(card => card.matched)) {
          this.gameStatus = 'Congratulations! You completed the puzzle!';
          clearInterval(this.timer);
        }
      },
      startTimer() {
        this.timer = setInterval(() => {
          if (this.timeLeft > 0) {
            this.timeLeft--;
          } else {
            this.gameStatus = 'Time is up!';
            clearInterval(this.timer);
          }
        }, 1000);
      },
      resetGame() {
        this.cards.forEach(card => {
          card.flipped = false;
          card.matched = false;
        });
        this.gameStatus = 'Try to match the cards!';
        this.timeLeft = 60;
        clearInterval(this.timer);
        this.startTimer();
      },
      goBack() {
        this.$router.go(-1);
      }
    },
    created() {
      this.startTimer();
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
  .creative-container {
    background-color: #F5EFFF;
    color: #624E88;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
  }
  
  .creative-header h2 {
    font-family: 'Press Start 2P', cursive;
    text-align: center;
    color: #624e88;
    font-size: 36px;
  }
  
  .creative-header p {
    text-align: center;
    font-size: 20px;
    color: #CDC1FF;
    font-weight: bold;
  }
  
  .timer {
    margin-top: 0.1in;
    font-family: 'Press Start 2P', cursive;
    font-size: 20px;
    color: #624e88;
    margin-bottom: 5px;
  }
  
  .game-container {
    margin-top: 5px;
    text-align: center;
  }
  
  .game-board {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
  
  .card {
    position: relative;
    width: 95px; /* You can adjust this value to make the cards narrower if desired */
    height: 150px; /* Increased height to make it more rectangular */
    background-color: #ccc;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

  
  .card img {
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
  
  .card-back {
    background-image: url('@/assets/card-design.png');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 8px; /* Optional: if you want to round the corners */
    border: 4px solid white; /* Adds a white border around the card */
}
  
  .flipped {
    background-color: #fff;
  }
  
  .status {
    margin-top: 20px;
    font-size: 18px;
    color: #624e88;
  }
  
  .back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 12px 40px;
    background-color: #624e88;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    min-width: 120px;
  }
  
  .back-button:hover {
    background-color: #513872;
  }
  
  .try-again-button {
    margin-top: 20px;
    padding: 12px 40px;
    background-color: #624e88;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    min-width: 120px;
  }
  
  .try-again-button:hover {
    background-color: #513872;
  }
  </style>
  