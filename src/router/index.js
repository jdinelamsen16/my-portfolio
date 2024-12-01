import { createRouter, createWebHistory } from 'vue-router';

// Import the views (pages) for routing
import HomePage from '../views/HomePage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import PortfolioShowcase from '../views/PortfolioShowcase.vue';
import ContactPage from '../views/ContactPage.vue';
import CreativePage from '../views/CreativePage.vue';
import LoginPage from '../views/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage, // Login page (entry point)
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage, // Home page
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage, // Profile page
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioShowcase, // Portfolio showcase page
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage, // Contact page
  },
  {
    path: '/creative',
    name: 'creative',
    component: CreativePage, // Creative page
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard to check if the user is authenticated
router.beforeEach((to, from, next) => {
  // Simulated check for login (replace with actual authentication logic)
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Example of using localStorage to track login status

  // Redirect to login page if not authenticated and trying to access restricted pages
  if (to.name !== 'login' && !isLoggedIn) {
    next({ name: 'login' }); // Redirect to login if not logged in
  } else {
    next();
  }
});

export default router;
