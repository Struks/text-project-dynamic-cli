import Vue from 'vue';
import Router from 'vue-router';
import ContactPage from './views/ContactPage';
import AboutPage from './views/AboutPage';
import HomePage from './views/HomePage';
import WorkPage from './views/WorkPage';
import BlogPage from './views/BlogPage';
import newPost from './components/blog/newPost';
import showPost from './components/blog/singlePost';
import editPost from './components/blog/editPost';
import login from '@/views/login.vue';
import signup from '@/views/signup.vue';
import profilUser from '@/views/profilUser.vue';
import editProfil from '@/components/userProfil/editProfil.vue';
// import firebase from 'firebase/app';
import {store} from '@/store/index'
import accessDenied from './components/blog/accessDenied.vue';
import AdminMenu from '@/views/AdminMenu.vue';


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/contact',
      component: ContactPage
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/work',
      component: WorkPage,
      name: 'WorkPage'
    },
    {
      path: '/blog',
      component: BlogPage,
      name: 'blog-page',
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/blog/newPost',
      component: newPost,
      name: 'new-post',
      meta: {
        requiresAuth: true,
        roles: ['moderator', 'bloger']
      }
    },
    {
      path: '/blog/:id',
      component: showPost,
      name: 'show-post'
    },
    {
      path: '/blog/:id/edit',
      component: editPost,
      name: 'edit-post',
      meta: {
        requiresAuth: true,
        roles: ['moderator','bloger']
      }
    },
    {
      path: '/login',
      component: login,
      name: 'login',
    },
    {
      path: '/signup',
      component: signup,
      name: 'sign-up'
    },
    {
      path: '/admin menu',
      component: AdminMenu,
      name: 'admin-menu',
      meta:{
        requiresAuth: true,
        roles: ['']
      }
    },
    {
      path: '/:uid',
      component: profilUser,
      name: 'profilUser',
      meta:{
        requiresAuth: true,
      }
    },
    {
      path: '/:uid/edit',
      component: editProfil,
      name: 'editProfil'
    },
    {
      path: '/no access',
      component: accessDenied,
      name: 'access-denied'
    },

  ]
})
//navigation guards
router.beforeEach((to, from, next) => {
  // const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // if (requiresAuth && !currentUser) next('login');
  // else next();

  const logUser = store.getters.logUser;
  const roles = to.meta.roles || [];

  //if user is logged in
  if (to.meta.requiresAuth && !logUser) {
    next({
      name: 'login',
      query: {
        redirectTo: to.path
      }
    });
  } else if (roles.length && logUser && !roles.includes(logUser.role) && logUser.role !== 'admin') {
    next({
      name: 'access-denied'
    });
  } else {
    next();
  }
});
export default router;