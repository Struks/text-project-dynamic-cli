import Vue from 'vue'
import Router from 'vue-router'
import ContactPage from './views/ContactPage'
import AboutPage from './views/AboutPage'
import HomePage from './views/HomePage'
import WorkPage from './views/WorkPage'
import BlogPage from './views/BlogPage'
import newPost from './components/blog/newPost'
import showPost from './components/blog/singlePost'
import editPost from './components/blog/editPost'
import login from '@/views/login.vue'
import signup from '@/views/signup.vue'
import firebase from 'firebase/app';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/contact',      
      component: ContactPage
    },
    {
      path:'/about',   
      component: AboutPage
    },
    {
      path:'/',  
      component: HomePage
    },
    {
      path:'/work',    
      component: WorkPage,
      name:'WorkPage'
    },
    { 
      path: '/blog',
      component: BlogPage,
      name:'blog-page',
      meta:{requiresAuth:true},
    },
    {
      path: '/blog/newPost',
      component: newPost,
      name:'new-post',
    },
    {
      path:'/blog/:id',
      component: showPost,
      name: 'show-post'
    },
    {
      path:'/blog/:id/edit',
      component: editPost,
      name: 'edit-post'
    },
    {
      path:'/login',
      component: login,
      name: 'login',
    },
    {
      path:'/signup',
      component: signup,
      name: 'sign-up'
    }
  
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
 
  if (requiresAuth && !currentUser) next('login');
  
  else next();
});
export default router;

